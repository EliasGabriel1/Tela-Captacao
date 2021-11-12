import styled from 'styled-components';

export const Input = styled.input`
  border-radius:3px;
  padding:10px 0px 10px 7px;
  border-radius: 7;
  border-width: 0;
  border: 1px solid #F9F9F9;
  background-color:#F9F9F9;
`;

export const ContentButton = styled.div`
    display:flex;
    display: -webkit-box;
    display: -ms-flexbox;  
    display: -webkit-flex; 
    justify-content:end;
    -moz-justify-content: end;
    -webkit-justify-content: end;
    margin-top:10px;

    @media (max-width:800px){
      margin-bottom: 100px;
      margin-left:35%;
    }

    input{
      background-color: #3525E6;
      border-radius: 25px 5px 25px 5px;
      -moz-border-radius:25px 5px 25px 5px;
      -webkit-border-radius:25px 5px 25px 5px;
      border: solid 2px aliceblue;
      -webkit-border: solid 2px aliceblue;
      -moz-border: solid 2px aliceblue;
      color: #FFF;
      padding: 18px 10px;
      -webkit-padding-after: 18px;
      -webkit-padding-before: 18px;
      -webkit-padding-start: 10px;
      -webkit-padding-end: 10px;
      cursor: pointer;
  }
`;


export const Container = styled.div`
    .form{
        @media (min-width:900px){
            min-width: 370px;
            max-width: 590px;
        }
    }
`;


export const Textarea = styled.textarea`
  padding:10px 0px 10px 15px;
  border-width: 0;
  resize: none;
  border: 1px solid #F9F9F9;
  background-color:#F9F9F9;
  border-radius: 25px 5px 25px 5px;
  font-size:14px;
  height: 150px;
`;