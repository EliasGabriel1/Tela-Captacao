import React from "react";
import Form from "./Form";
import Imagem from "./Imagem/index"
import styled from 'styled-components';

export const Container = styled.div`
    @media (max-width:900px){
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    
    @media (min-width:900px){
        max-width:1300px;
        display:flex;
        justify-content: space-evenly;
        align-items:center;
        height:100vh;
        margin:0 auto;
    }
`;


export default function ContactUs() {
  return (
    <Container>
        <Imagem/>
        <Form />
    </Container>
  );
}
