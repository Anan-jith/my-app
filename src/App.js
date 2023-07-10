import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css'

const socket = io('http://localhost:3001');


function App() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    // Listen for chat messages from the server
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up event listener on component unmount
    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (messageInput.trim() !== '') { 
      // Emit the chat message event to the server
      socket.emit('chat message', messageInput);
      setMessageInput('');
    }
  };

  return (
    <>
    
<div className='real'>
  CHATGRAM<br></br>

 <p className='para'> ONLINE USERS</p>
 <p>ADHARV</p>
 <p>HIRAN</p>
 <p>KIRAN</p>
 <p>SAYNTH</p>
 <p>ADHARV</p>

</div>
  <div className='all'>
      <h1 className='hmm'>CHATBOT</h1>
       

      <form className='form' onSubmit={sendMessage}>
        <div className='div'>

      {messages.map((message, index) => (
        <div className='index'>
        <h4 key={index}>{message}</h4>
        </div>
        ))}
        
      
        </div>
        <input className='new'
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          />
        <button className='btn' type="submit">Send</button>
      </form>
          </div>
  
          </>
  );
}

export default App;
