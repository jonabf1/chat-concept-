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
display:flex;

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

 .box-online{
   background:#8E8999;
   width:300px;
   height:521px;
   display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;


  .avatar-registered{
    width:30px !important;
    height:30px !important;
    margin:0;
    margin-right:5px;
  }

  .loading{
       display:flex;
       flex-grow:2;
       align-items:center;
       justify-content:center;
       svg{
        animation: ${rotate} 2s linear infinite;
       }
      }

small{
  margin-right:5px;
}

strong{
  color:#75D63C;
  margin-bottom:5px;
}
    span{
      margin-top:15px;
      color:#fff;
      display:flex;
     justify-content:center;
     margin:10px;

     strong{
      margin-left:6px;
       color: #fff;

     }
    }

    img{
      margin-bottom:10px;
     margin-top:15px;
      height:45px;
      border-radius:50%;
      margin-left:5px;
      }

   .list{
    max-height:80%;
    overflow: auto;
    width:75%;
    color:#fff;
    background:#635E6E;
    border-radius:4px;


    &{
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

p{
  border-bottom:1px solid #8E8999;
  padding:13px;
  display:flex;
  align-items:center;

  &:hover{
    opacity:0.6;
    cursor:pointer;
  }

  a{
    display:flex;
    align-items:center;

  }
}
    svg{
      margin-right:8px;
    }
   }
 }

 .box-chat{
   background:#6B6575;
   width:800px;
   height:521px;
   display:flex;
    flex-direction: column;
     justify-content:space-between;
     align-items:center;

     .loading{
       display:flex;
       flex-grow:2;
       align-items:center;
       justify-content:center;
       svg{
        animation: ${rotate} 2s linear infinite;
       }
     }


  .messages{
    width:700px;
    height:480px;
    color:#fff;
    padding:30px;
    overflow: auto;

    .new-messages{
      display:flex;
      align-items:center;
      justify-content:center;
      cursor:pointer;
      margin-bottom:15px;
      top:-15px;
      color:#fff;
      position:relative;

      svg{
        animation: ${rotate} 2s linear infinite;
       }
    }


    &{
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

    div{
      display:flex;
        margin-bottom:30px;

      &:last-child{
        margin:0;
      }

      .profile{
        display:flex;
        flex-direction:column;

        p{
         margin-top:5px;
        }
        strong{
          color:#3DC8E2;
          display:flex;
          align-items:center;

          a{
            margin-left:7px;
            color:#F9F871;
          }

        }
      }
    }

      svg{
      border-radius:50%;
      margin-right:10px;
    }

    img{
      height:35px;
      border-radius:50%;
      margin-right:10px;
    }
  }

   .box-message{
   margin-bottom:15px;
   width:720px;
   height:60px;
   border-radius:8px;
   display:flex;
   justify-content:center;
    align-items:baseline;

   button{
     background:#8E8999;
     color:#635E6E;
     height:60px;
     width:12%;
     margin-left:2px;
     border-radius:8px;
   }

   input{
     border-radius:8px;
     border:0;
     height:60px;
     padding:20px;
     width:620px;
     background:#635E6E;
     color:#fff;
   }


   input::placeholder{
     color:#B9B3C4;
     font-size:15px;
    }
   }
 }
`;


