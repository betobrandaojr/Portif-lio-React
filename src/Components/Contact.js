import { useState } from 'react';
import './Contact.css';


function FormEmail() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <section className='section-form-email-container'>
        <div className="div-formemail-container" id='contato'>
            <h1 className="title-formemail">Contato</h1>
            <form className="form-formemail" onSubmit={() => {}}>
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