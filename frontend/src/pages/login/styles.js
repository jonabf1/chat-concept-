import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from{
    transform:rotate(0deg);
  }
  to{
      transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  form{
display:flex;
flex-direction:column;
align-items:center;
margin-top:15px;
  }

  ul{
    width:550px;
    height:200px;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;

    li{
      list-style:none;
      padding:4px;

        .active{
        border:2px solid yellow;
        border-radius:50%;
        width:100px;
        height:100px;
      }

      img{
        -webkit-transition: width 0.5s, height 0.5s, -webkit-transform 0.5s;
        width:85px;
        height:85px;
        background:#fff;
        border-radius:50%;
        cursor:pointer;

        &:hover{
        width:100px;
        height:100px;
        background:#fff;
        border-radius:50%;

        }
      }
    }
  }

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

  input{
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin:7px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  margin-left: 10px;
  border-radius: 4px;
  font-size:18px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #00C8A1;
  color: #fff;
  box-shadow: 0 0 20px rgba(1, 0, 0, 0.1);


  &:hover {
    background: #00B491;
    transition: all 0.4s ease;
    -webkit-transition: all 0.4s ease;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

