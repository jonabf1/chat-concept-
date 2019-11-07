import React, { useState, useEffect } from 'react';
import { FaSpinner, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Container } from './styles';
import Api from '../../services/api';
import socket from 'socket.io-client';

export default function Board({ history }) {
  const [dateUser, setDateUser] = useState('');
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countPaginate, setCountPaginate] = useState(0);
  const [loadingNewMessages, setLoadingNewMessages] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [limitPage, setLimitePage] = useState(false);

  useEffect(() => {
    if (!history.location.state) {
      history.push('/')
    }
    else {
      setDateUser(history.location.state)
    }
    loadData();
    realTimeMessages();
    usersRegistered()
  }, [])

  async function usersRegistered() {
    const user = await Api.get('/users/all');
    setAllUsers(user.data)
  }

  async function loadData() {
    try {
      const messages = await Api.get(`/message/${countPaginate + 1}`)
      setData(messages.data)
      setCountPaginate(countPaginate + 1);
      setLoading(false)
      scrollDown();
    } catch (err) { return err }
  }

  function realTimeMessages() {
    try {
      const io = socket(process.env.REACT_APP_BASE_URL);
      io.on('newMessage', function (msg) {
        setData(array => [...array, msg]);
        scrollDown();
      }
      );
    } catch (err) { return err }
  }

  async function updateItems() {
    //const elmnt = document.querySelector(".messages");
    //const y = elmnt.scrollTop;
    setLoadingNewMessages(true)
    try {
      const messagesNew = await Api.get(`/message/${countPaginate + 1}`)

      //calcula o length das proximas mensagens se vai ser maior que 25
      const testLimitMsgs = await Api.get(`/message/${countPaginate + 2}`)
      if (testLimitMsgs.data.length <= 25) {
        setLimitePage(true)
      }
      setData(item => messagesNew.data.concat(item));
      setCountPaginate(countPaginate + 1);
      setLoadingNewMessages(false)
    } catch (err) { return err }
  }

  function scrollDown() {
    //mover usuario para ultima mensagem
    const el = document.querySelector('.messages').lastChild;
    el.scrollIntoView({ behavior: "auto" });
  }

  function prevRoute() {
    history.push('/');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await Api.post('/message', {
        message,
        authorId: dateUser._id,
        image: dateUser.image,
        name: dateUser.name,
        url: dateUser.url,
        user: dateUser.user
      });
      setMessage('');
    } catch (err) { return err }
  }

  return (
    <>
      <div className="header">
        <FaChevronLeft onClick={() => prevRoute()} color="#fff" size={20} />
        <h2>chat</h2>
        <FaChevronRight color="#fff" size={20} />
      </div>
      <Container>
        <div className="box-online">
          <img src={dateUser.image} alt="avatar" />

          <strong>Registered users</strong>

          {loading ? <div className="loading"><FaSpinner color="#fff" size={24} /></div> : (
            <div className="list">
              {allUsers.map(user => (
                <p key={user._id}>
                  <img src={user.image} className="avatar-registered" alt="avatar" />
                  {user.name}</p>
              ))
              }
            </div>
          )}
        </div>

        <div className="box-chat">
          {loading ? <div className="loading">
            <FaSpinner color="#fff" size={24} /></div> : (
              <div className="messages">
                <div className="new-messages">
                  {(data.length >= 25 && !limitPage) && (
                    loadingNewMessages ? (
                      <FaSpinner size={20} color="#fff" />
                    )
                      :
                      (
                        <p onClick={() => updateItems()}>Carregar mais mensagens</p>
                      ))
                  }
                </div>
                {data.map(item => (
                  <div key={item._id}>
                    {item.authorId.image &&
                      <img src={item.authorId.image} alt="avatar" />
                    }
                    <div className="profile">
                      <strong>{item.authorId.name}<a target="_blank"
                        rel="noopener noreferrer"
                        href={item.authorId.url}>{item.authorId.provider
                          ? '#github' : 'visitor'}
                      </a></strong>
                      {item.message}
                    </div>
                  </div>
                ))}
              </div>
            )}
          <form onSubmit={handleSubmit}>
            <div className="box-message">
              <input value={message} type="text"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escreva sua mensagem e aperte Enter"></input>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
