import React from 'react';
import { FaGithub, FaUserAlt } from 'react-icons/fa';
import { SubmitButton1, SubmitButton2 } from './styles';
import Header from '../../components/header';

export default function Main({ history }) {
  function nextRoute(id) {
    if (id === 1) {
      history.push(`/login/${id}`);
    } else {
      history.push(`/login/${id}`);
    }
  }

  return (
    <>
      <Header visibleLeft={false} visibleImage={false} />
      <div>
        <SubmitButton2 onClick={() => nextRoute(1)}>
          <FaUserAlt color="#FFF" size={20} />
          Visitante
        </SubmitButton2>
        <SubmitButton1 onClick={() => nextRoute(2)}>
          <FaGithub color="#fff" size={25} />
          Github
        </SubmitButton1>
      </div>
    </>
  );
}
