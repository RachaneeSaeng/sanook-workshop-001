import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    alert(`Hi ${name}
    Email ${email}
    Message ${message}`
    );
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container">
      <h1>Fill me please!</h1>
      <form onSubmit={submitForm}>
        <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={e => setName(e.target.value)}
        className="form-field"/>        
        
        <input 
        type="email" 
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="form-field"/>
        
        <textarea 
        rows={5} 
        placeholder="Message" 
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="form-field"/>
        
        <button type="submit"  >Submit</button>
      </form>
    </div>
  );
}

export default App;
