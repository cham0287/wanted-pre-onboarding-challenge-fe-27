import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Zod 스키마 정의
const signupSchema = z
  .object({
    email: z
      .string()
      .email('올바른 이메일 형식이 아닙니다')
      .min(1, '이메일을 입력해주세요'),
    password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다'),
    confirmPassword: z.string().min(1, '비밀번호를 다시 입력해주세요'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['confirmPassword'],
  });

type SignupFormData = z.infer<typeof signupSchema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: SignupFormData) => {
    // 회원가입 로직 구현
    console.log(data);
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-6 text-center'>회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            이메일
          </label>
          <input
            type='email'
            {...register('email')}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='이메일을 입력하세요'
          />
          {errors.email && (
            <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
          )}
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            비밀번호
          </label>
          <input
            type='password'
            {...register('password')}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='비밀번호를 입력하세요'
          />
          {errors.password && (
            <p className='text-red-500 text-xs mt-1'>
              {errors.password.message}
            </p>
          )}
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2'>
            비밀번호 확인
          </label>
          <input
            type='password'
            {...register('confirmPassword')}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='비밀번호를 다시 입력하세요'
          />
          {errors.confirmPassword && (
            <p className='text-red-500 text-xs mt-1'>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button
          type='submit'
          disabled={!isValid}
          className={`w-full py-2 px-4 rounded-md ${
            isValid
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
        >
          가입하기
        </button>
        <p className='mt-4 text-center text-sm text-gray-600'>
          이미 계정이 있으신가요?{' '}
          <Link to='/auth/login' className='text-blue-500 hover:text-blue-600'>
            로그인하기
          </Link>
        </p>
      </form>
    </div>
  );
}
