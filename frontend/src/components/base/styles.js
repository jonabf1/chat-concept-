import styled from 'styled-components';

export const Container = styled.div`
  background: #494453;
  border-radius: 4px;
  width: 1100px;
  height: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

.header{
  display:flex;
  align-items:center;
  justify-content:space-around;
  padding: 3px;
    border-bottom: 1px solid #423d4b;
    width: 100%;

  svg:first-child{
    cursor:pointer;
  }

 svg:last-child{
   opacity:0;
    }
  }

  h2 {
    color: #fff;
    font-size: 28px;
    text-align: center;
  }

  small {
    color: #fff;
    margin-bottom:2px;
    font-size: 11px;
    font-family: 'Montserrat', sans-serif !important;

    a{
      color:#fff;
      text-decoration:none;
    }
  }

  button {
    padding: 12px;
    width: 160px;
    height:50px;
    margin-bottom: 12px;
    align-items: center;
    justify-content: center;
    border: 0;
    font-weight: bold;
  }

  h1 {
    color: #fff;
    margin-bottom: 150px;
  }
  box-shadow: 0 0 20px rgba(1, 0, 0, 0.3);
`;
