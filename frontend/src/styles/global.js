import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  html, body, #root{
  font-size:62.5%;
  /* desktop */
  width:95%;
  height:99.5%;
  /* desktop */
  display:flex;
  align-items:center;
  justify-content:center;
  margin:0 auto;
  }

/* start of medium phone styles */
@media(max-width:250px){
  html,body, #root {
    font-size:35%;
    width:99%;

    .messages {
      & {
        ::-webkit-scrollbar-track {

          background-color: #edf0f4;
        }
        ::-webkit-scrollbar {
          width: 4px;
          background: #494453;
        }
        ::-webkit-scrollbar-thumb {
          width: 1px;
          background: #494453;
        }
      }
    }

  }
}
/* start of large phone styles */
  @media(max-width:479px){
   html,body, #root {
    font-size:55%;
    width:99%;

    .messages {
      & {
        ::-webkit-scrollbar-track {

          background-color: #edf0f4;
        }
        ::-webkit-scrollbar {
          width: 4px;
          background: #494453;
        }
        ::-webkit-scrollbar-thumb {
          width: 1px;
          background: #494453;
        }
      }
    }

    .header{
      img{
        width:35px ;
        height:35px ;
        border-radius:50% ;
        opacity:1;
      }
    }

   .box-online{
     display:none;
    }

    .messages{
      padding:15px;
    }

    .box-message input{
      width:95%;
    }

    .new-messages{
      margin-top:10px;
    }
   }

  }

/* start of medium tablet styles */
  @media(max-width:767px){
   html,body, #root {
    font-size:60%;
    width:99%;

          .messages{
            & {
          ::-webkit-scrollbar-track {
            background-color: #edf0f4;
          }
          ::-webkit-scrollbar {
            width: 5px;
            background: #494453;
          }
          ::-webkit-scrollbar-thumb {
            background: #494453;
          }
        }
        }
    .box-online{
      width:45%;


      .list{
        width:96%;
        & {
        ::-webkit-scrollbar-track {

          background-color: #edf0f4;
        }
        ::-webkit-scrollbar {
          width: 5px;
          background: #494453;
        }
        ::-webkit-scrollbar-thumb {
          width: 1px;
          background: #494453;
        }
      }
    }

    .messages{
      padding:15px;
    }

    .box-message input{
      width:95%;
    }

    .new-messages{
      margin-top:10px;
    }
   }
  }
}

/* start of large tablet styles */
@media(min-width:768px) and (max-width:991px){
    html,body, #root {
    font-size:60%;
    width:99%;

    .box-online{
      width:50%;
        }
    }
}

  body{
    background: #AEA8BA;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button{
    font-family: 'Oxygen', sans-serif;
  }

  button{
    cursor:pointer;
  }

`;
