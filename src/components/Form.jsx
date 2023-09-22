import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {signIn} = UserAuth();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('invalid email or password! Enter placeholder text and try again')
    try {
      await signIn(email, password)
      navigate('/gallery')
    } catch (e) {
      setError('invalid email or password! Enter placeholder text and try again')
      console.log(e.message)
    }
  };
  
  return (
    <div className='w-[90%] my-3 sm:my-0'>
      <form onSubmit={handleSubmit} className='w-[90%]'>
        <div>
          <input className='m-2 sm:m-3 w-[200px] sm:w-[300px] border border-t-1 rounded-sm sm:p-1'
            type="email"
            placeholder="user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input className='m-2 sm:m-3 w-[200px] sm:w-[300px] border border-t-1 rounded-sm sm:p-1'
            type="password"
            placeholder="1Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-xs text-red-600 mx-3">{error}</div>}
        <button className='bg-blue-900 w-[200px] sm:w-[300px] sm:p-1 text-center text-white m-2 sm:m-3 rounded-sm hover:bg-gray-800 hover:text-gray-50'>Login</button>
      </form>
    </div>
  )
}

export default Login