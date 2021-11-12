import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button,textarea{
    font: 14px 'Poppins', sans-serif;
    color:#858C94;
  }

  button {
    cursor: pointer;
  }

  .form-group{
      display:flex;
      flex-direction:column;
      margin-top:20px;
  }

  input:focus-visible,:focus-visible {
      outline:none;
  }

  input[type=text] {
      width: 100%;
      margin: 8px 0;
      box-sizing: border-box;
      border: none;
      outline: none;
  }

  input[type=text]:focus {
      width: 100%;
    height: auto;
  }

  .btn{
      background-color: #3525E6;
      border-radius: 25px 5px 25px 5px;
      border: solid 2px aliceblue;
      -webkit-border: solid 2px aliceblue;
      color: #FFF;
      padding: 18px 10px;
      cursor: pointer;
  }
`;
