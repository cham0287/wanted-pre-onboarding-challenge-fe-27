import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 로직 구현
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-6 text-center'>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'></label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='이메일을 입력하세요'
            required
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2'></label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='비밀번호를 입력하세요'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          로그인
        </button>
        <p className='mt-4 text-center text-sm text-gray-600'>
          계정이 없으신가요?{' '}
          <Link to='/auth/signup' className='text-blue-500 hover:text-blue-600'>
            회원가입하기
          </Link>
        </p>
      </form>
    </div>
  );
}
