import { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function FormEmail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos!');
      return;
    }

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email Enviado", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.log("ERRO: ", err);
      });
  }

  return (
    <section className='section-form-email-container'>
      <div className="div-formemail-container" id='contato'>
        <h1 className="title-formemail">Contato</h1>
        <form className="form-formemail" onSubmit={sendEmail}>
          <input 
            className="input-formemail"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input 
            className="input-formemail"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea 
            className="textarea-formemail"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button-formemail" type="submit" value="Enviar" />
        </form>
      </div>
    </section>
  );
}

export default FormEmail;
