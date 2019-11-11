import styled from 'styled-components';

export const Container = styled.div`
  background: #494453;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  max-height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 1.4rem;
  }

  p {
    font-size: 1.4rem;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.5rem;
    border-bottom: 1px solid #423d4b;
    width: 100%;

    img {
      opacity: 0;
      width: 0;
      height: 0;
    }

    svg {
      cursor: pointer;
    }
  }

  h2 {
    color: #fff;
    font-size: 2.8rem;
    text-align: center;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    small {
      color: #aea8ba;
      font-size: 1.1rem;
      text-align: center;
      font-family: 'Montserrat', sans-serif !important;

      a {
        color: #aea8ba;
        text-decoration: none;
      }
    }
  }

  button {
    max-width: 100%;
    width: 100%;
    height: 5rem;
    margin-bottom: 1rem;
    border: 0;
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: #fff;
    margin-bottom: 15rem;
  }
  box-shadow: 0 0 20px rgba(1, 0, 0, 0.3);
`;
