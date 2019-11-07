import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Base from './components/base';

export default function App() {

  return (
    <>
      <Base>
        <Routes />
      </Base>
      <GlobalStyle />
    </>
  );
}
