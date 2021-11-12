import emailjs from "emailjs-com";
import React from "react";
import {Input,ContentButton,Textarea,Container} from "./styled"
import TextForm from "../TextForm";

export default function Form() {
    
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm("service_gxqhj5m", "template_gy2si4a",  e.target,  "user_c2Ict1SmuMr98yELFDYFJ")

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }
    return(
            <Container>
      
    <form onSubmit={sendEmail}>
        <TextForm/>
        <div className="form-group mx-auto">
          <label>Nome:</label>
          <Input
            type="text"
            autoFocus
            className="form-control"
            required
            placeholder="Nome"
            name="name"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <Input
            type="email"
            className="form-control"
            required
            placeholder="Seu email"
            name="email"
          />
        </div>

        <div className="form-group mx-auto">
          <label>Mensagem:</label>
          <Textarea
            className="form-control"
            id=""
            cols="30"
            rows="8"
            required
            placeholder="Explique sua ideia"
            name="message"
          ></Textarea>
        </div>
        <ContentButton>
          <input
            type="submit"
            className="btn"
            value="Enviar mensagem"
          ></input>
        </ContentButton>
    </form>
    </Container>
  );
}
