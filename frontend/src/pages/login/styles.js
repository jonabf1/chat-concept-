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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .error {
    font-size: 1.4rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
  }

  ul {
    width: 100%;
    max-height: 300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;
      padding: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;

      .active {
        border: 2px solid yellow;
      }

      img {
        -webkit-transition: width 0.5s, height 0.5s, -webkit-transform 0.5s;
        max-width: 7rem;
        max-height: 7rem;
        width: 95%;
        height: 95%;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
          width: 7.5rem;
          height: 7.5rem;
          background: #fff;
          border-radius: 50%;
        }
      }
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 3px;
    border-bottom: 1px solid #423d4b;
    width: 100%;

    svg:first-child {
      cursor: pointer;
    }

    svg:last-child {
      opacity: 0;
    }
  }

  input {
    border: 1px solid #eee;
    width: 100%;
    padding: 1.5rem;
    height: 4rem;
    border-radius: 4px;
    font-size: 1.5rem;
    margin: 0.7rem;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #00c8a1;
  box-shadow: 0 0 20px rgba(1, 0, 0, 0.1);

  &:hover {
    background: #00b491;
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
