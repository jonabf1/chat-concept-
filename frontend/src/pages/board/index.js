import React, { useState, useEffect } from 'react';
import { FaSpinner, FaArrowDown } from 'react-icons/fa';
import socket from 'socket.io-client';
import { Container } from './styles';
import Api from '../../services/api';
import Header from '../../components/header';

export default function Board({ history }) {
  const [dateUser, setDateUser] = useState('');
  const [message, setMessage] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countPaginate, setCountPaginate] = useState(0);
  const [loadingNewMessages, setLoadingNewMessages] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [limitPage, setLimitePage] = useState(false);
  const [statusDiv, setStatusDiv] = useState(false);

  useEffect(() => {
    if (!history.location.state) {
      history.push('/');
    } else {
      setDateUser(history.location.state);
    }
    loadData();
    realTimeMessages();
    usersRegistered();
  }, []);

  function positionForDisableScroll() {
    const el = document.querySelector('.messages').lastChild;
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
    if (isVisible) {
      return setStatusDiv(false);
    }
    return setStatusDiv(true);
  }

  async function usersRegistered() {
    const user = await Api.get('/users/all');
    setAllUsers(user.data);
  }

  async function loadData() {
    try {
      const messages = await Api.get(`/message/${countPaginate + 1}`);
      setData(messages.data);
      setCountPaginate(countPaginate + 1);
      setLoading(false);
      scrollDown();
    } catch (err) {
      return err;
    }
  }

  function realTimeMessages() {
    try {
      const io = socket(process.env.REACT_APP_BASE_URL);
      io.on('newMessage', function(msg) {
        setData(array => [...array, msg]);
        if (!statusDiv) {
          scrollDown();
        }
      });
    } catch (err) {
      return err;
    }
  }

  async function updateItems() {
    setLoadingNewMessages(true);
    try {
      const messagesNew = await Api.get(`/message/${countPaginate + 1}`);
      // calcula o length das proximas mensagens se vai ser maior que 25
      if (messagesNew.data.length < 25) {
        setLimitePage(true);
      }
      setData(item => messagesNew.data.concat(item));
      setCountPaginate(countPaginate + 1);
      setLoadingNewMessages(false);
    } catch (err) {
      return err;
    }
  }

  function scrollDown() {
    // mover usuario para ultima mensagem
    const el = document.querySelector('.messages').lastChild;
    el.scrollIntoView({ behavior: 'auto' });
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
        user: dateUser.user,
      });
      setMessage('');
    } catch (err) {
      return err;
    }
  }

  return (
    <>
      <Header visibleLeft visibleImage img={history.location.state.image} />
      <Container>
        <div className="box-online">
          <img src={dateUser.image} alt="avatar" />

          <strong>Registered users</strong>

          {loading ? (
            <div className="loading">
              <FaSpinner color="#fff" size={24} />
            </div>
          ) : (
            <div className="list">
              {allUsers.map(user => (
                <p key={user._id}>
                  <img
                    src={user.image}
                    className="avatar-registered"
                    alt="avatar"
                  />
                  {user.name}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="box-chat">
          {loading ? (
            <div className="loading">
              <FaSpinner color="#fff" size={24} />
            </div>
          ) : (
            <div
              onScrollCapture={() => positionForDisableScroll()}
              className="messages"
            >
              <div className="new-messages">
                {data.length >= 25 &&
                  (loadingNewMessages ? (
                    <FaSpinner size={20} color="#fff" />
                  ) : (
                    !limitPage && (
                      <p onClick={() => updateItems()}>
                        Carregar mais mensagens
                      </p>
                    )
                  ))}
              </div>
              {data.map(item => (
                <div key={item._id}>
                  {item.authorId.image && (
                    <img src={item.authorId.image} alt="avatar" />
                  )}
                  <div className="profile">
                    <strong>
                      {item.authorId.name}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.authorId.url}
                      >
                        {item.authorId.provider ? '#github' : 'visitor'}
                      </a>
                    </strong>
                    <p>{item.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {statusDiv && (
            <div onClick={() => scrollDown()} className="scrolldown">
              <FaArrowDown
                onClick={() => scrollDown()}
                color="#fff"
                size={30}
              />
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="box-message">
              <input
                value={message}
                type="text"
                onChange={e => setMessage(e.target.value)}
                placeholder="Escreva sua mensagem e aperte Enter"
              />
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}
