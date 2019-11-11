import React, { useState, useEffect } from 'react';
import { FaGithub, FaSpinner } from 'react-icons/fa';
import { Container, SubmitButton } from './styles';
import api from '../../services/api';
import SelectImage from '../../components/selectImage';
import Header from '../../components/header';

export default function Login({ match, history }) {
  const [loading, setLoading] = useState(false);
  const [decide, setDecide] = useState(null);
  const [user, setUser] = useState('');
  const [imgVisitor, setImgVisitor] = useState('');

  useEffect(() => {
    if (match.params.id == 1) {
      setDecide(true);
    } else {
      setDecide(false);
    }
  }, []);

  function catchUrlImage(event) {
    // url do visitante no component selectImage
    setImgVisitor(event);
  }

  async function nextRoute(e) {
    e.preventDefault();
    const error = document.querySelector('.error');
    if (!user) {
      return [
        (error.style.color = 'white'),
        (error.innerHTML = 'Preencha o campo vazio'),
      ];
    }
    setLoading(true);
    const typeUser = decide ? 'user' : 'github';
    const objectUser = decide
      ? {
          name: user,
          image: imgVisitor,
        }
      : {
          user,
        };

    if (!imgVisitor && decide) {
      setLoading(false);
      return [
        (error.style.color = 'white'),
        (error.innerHTML = 'Escolha um avatar'),
      ];
    }

    const userCreate = await api.post(`/${typeUser}`, objectUser);

    const location = {
      pathname: '/board',
      state: userCreate.data,
    };

    history.push(location);
  }

  return (
    <>
      <Header visibleLeft visibleImage={false} />
      {decide ? (
        <Container>
          <SelectImage catchUrlImage={catchUrlImage} />
          <form onSubmit={nextRoute}>
            <input
              type="text"
              onChange={e => setUser(e.target.value)}
              placeholder="Apelido para o chat"
            />
            <SubmitButton loading={loading}>
              {loading ? <FaSpinner color="#fff" size={24} /> : 'Entrar'}
            </SubmitButton>
            <p className="error" />
          </form>
        </Container>
      ) : (
        <Container>
          <form onSubmit={nextRoute}>
            <FaGithub size={60} color="#fff" />
            <input
              type="text"
              onChange={e => setUser(e.target.value)}
              placeholder="Usuário do Github"
            />
            <SubmitButton loading={loading}>
              {loading ? <FaSpinner color="#fff" size={24} /> : 'Entrar'}
            </SubmitButton>
            <p className="error" />
          </form>
        </Container>
      )}
    </>
  );
}
