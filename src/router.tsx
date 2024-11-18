import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from './pages/auth/AuthLayout';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
]);
