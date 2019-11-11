import styled, { keyframes } from 'styled-components';

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
  width: 100%;
  height: 100%;

  .scrolldown {
    display: fixed;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .box-online {
    background: #8e8999;
    max-width: 300px;
    width: 100%;
    max-height: 521px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-bottom-left-radius: 4px;

    .avatar-registered {
      width: 30px !important;
      height: 30px !important;
      margin: 0;
      margin-right: 5px;
    }

    .loading {
      display: flex;
      flex-grow: 2;
      align-items: center;
      justify-content: center;
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    }

    small {
      margin-right: 5px;
    }

    strong {
      color: #75d63c;
      margin-bottom: 5px;
    }
    span {
      margin-top: 15px;
      color: #fff;
      display: flex;
      justify-content: center;
      margin: 10px;

      strong {
        margin-left: 6px;
        color: #fff;
      }
    }

    img {
      margin-bottom: 10px;
      margin-top: 15px;
      height: 45px;
      border-radius: 50%;
      margin-left: 5px;
    }

    .list {
      border-bottom-left-radius: 4px;
      max-height: 80%;
      overflow: auto;
      width: 75%;
      color: #fff;
      background: #635e6e;
      border-radius: 4px;

      & {
        ::-webkit-scrollbar-track {
          background-color: #edf0f4;
        }
        ::-webkit-scrollbar {
          width: 10px;
          background: #494453;
        }
        ::-webkit-scrollbar-thumb {
          background: #494453;
        }
      }

      p {
        border-bottom: 1px solid #8e8999;
        padding: 13px;
        display: flex;
        align-items: center;

        &:hover {
          opacity: 0.6;
          cursor: pointer;
        }

        a {
          display: flex;
          align-items: center;
        }
      }
      svg {
        margin-right: 8px;
      }
    }
  }

  .box-chat {
    background: #6b6575;
    max-width: 800px;
    width: 100%;
    max-height: 521px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-bottom-right-radius: 4px;

    .loading {
      display: flex;
      flex-grow: 2;
      align-items: center;
      justify-content: center;
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    }

    .messages {
      max-width: 700px;
      width: 100%;
      max-height: 480px;
      height: 100%;
      color: #fff;
      padding: 30px;
      overflow: auto;

      .new-messages {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-bottom: 5px;
        margin-top: 10px;
        top: -15px;
        color: #fff;
        position: relative;

        svg {
          animation: ${rotate} 2s linear infinite;
        }
      }

      & {
        ::-webkit-scrollbar-track {
          background-color: #edf0f4;
        }
        ::-webkit-scrollbar {
          width: 10px;
          background: #494453;
        }
        ::-webkit-scrollbar-thumb {
          background: #494453;
        }
      }

      div {
        display: flex;
        margin-bottom: 30px;

        &:last-child {
          margin: 0;
        }

        .profile {
          display: flex;
          flex-direction: column;

          strong {
            color: #3dc8e2;
            display: flex;
            align-items: center;

            a {
              margin-left: 7px;
              color: #f9f871;
            }
          }
        }
      }

      svg {
        border-radius: 50%;
        margin-right: 10px;
      }

      img {
        height: 35px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }

    form {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .box-message {
      margin-bottom: 15px;
      max-width: 720px;
      max-height: 60px;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: baseline;

      button {
        background: #8e8999;
        color: #635e6e;
        height: 60px;
        width: 12%;
        margin-left: 2px;
        border-radius: 8px;
      }

      input {
        border-radius: 8px;
        border: 0;
        max-height: 60px;
        height: 100%;
        max-width: 620px;
        width: 100%;
        padding: 2rem;
        background: #635e6e;
        color: #fff;
      }

      input::placeholder {
        color: #b9b3c4;
        font-size: 1.5rem;
      }
    }
  }
`;
