import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value,setvalue]=useState('')
  const[er,seter]=useState(false)

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
const handlechange=(event)=>{
  setvalue({...value,[event.target.name]:event.target.value})
}
  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmail(value.email)
      }

      
      // Handle the response from the server
    
  return (
    <div className='container'>
      <div className='card5'>
        <div className='card-body'>
          <form className='cover mx-auto' onSubmit={handleSubmit}>
            <nav className='navbar bg-body-tertiary'>
              <div className='container-fluid'>
                <a className='navbar-brand'>LOGIN PAGE</a>
              </div>
            </nav>
            <input
              type='text'
              value={setvalue.email}
              name='email'
              placeholder='enter email'
              onChange={handlechange}
              required
            />
            <input
              type='password'
              name='password'
              placeholder='enter password'
              value={setvalue.password}
              onChange={handlechange}
            />
            <button type='submit'>LOGIN</button>
          </form>
          {er &&
          <h1>invalid username or password</h1>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;
