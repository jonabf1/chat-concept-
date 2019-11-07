import React, { useState, useEffect } from 'react';
import { FaGithub, FaSpinner, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Container, SubmitButton } from './styles';
import api from '../../services/api';
import SelectImage from '../../components/selectImage';

export default function Login({ match, history }) {
  const [loading, setLoading] = useState(false);
  const [decide, setDecide] = useState(0);
  const [user, setUser] = useState('');
  const [imgVisitor, setImgVisitor] = useState('');

  useEffect(() => {
    if (match.params.id == 1) {
      setDecide(1);
    }
    else {
      setDecide(2);
    }
  }, [])

  function catchUrlImage(event) {
    //url do visitante no component selectImage
    setImgVisitor(event)
  }

  function prevRoute() {
    history.push('/');
  }

  async function nextRoute(e) {
    e.preventDefault();
    const error = document.querySelector('.error');
    if (!user) {
      return (
        [error.style.color = 'white',
        error.innerHTML = 'Preencha o campo vazio'])
    }
    setLoading(true);

    let userCreate;
    if (decide === 1) {

      if (!imgVisitor) {
        setLoading(false)
        return (
          [error.style.color = 'white',
          error.innerHTML = 'Escolha um avatar'])
      }

      userCreate = await api.post('/user', {
        name: user,
        image: imgVisitor
      })
    }

    else {
      userCreate = await api.post('/github', {
        user
      })
    }

    const location = {
      pathname: '/board',
      state: userCreate.data
    }
    history.push(location)
  }

  return (
    <>
      <div className="header">
        <FaChevronLeft onClick={() => prevRoute()} color="#fff" size={20} />
        <h2>chat</h2>
        <FaChevronRight color="#fff" size={20} />
      </div>
      {decide === 1 ? (
        <Container>
          <SelectImage catchUrlImage={catchUrlImage} />
          <form onSubmit={nextRoute}>
            <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="Apelido para o chat"></input>
            <SubmitButton loading={loading} >{loading ? <FaSpinner color="#fff" size={24} /> : 'Entrar'}</SubmitButton>
            <p className="error"></p>
          </form>
        </Container>
      ) : (
          <Container>
            <form onSubmit={nextRoute}>
              <FaGithub size={60} color="#fff"></FaGithub>
              <input type="text" onChange={(e) => setUser(e.target.value)} placeholder="Usuário do Github"></input>
              <SubmitButton loading={loading} >{loading ? <FaSpinner color="#fff" size={24} /> : 'Entrar'}</SubmitButton>
              <p className="error"></p>
            </form>
          </Container>
        )}

    </>
  );
}
