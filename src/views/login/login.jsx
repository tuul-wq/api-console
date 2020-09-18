import React from 'react';
import Logo from '../../components/common/logo/logo';
import RepoLink from '../../components/common/repo-link/repo-link';

import { AuthProvider } from '../../context/auth-context';
import AuthService from '../../services/auth.service';
import LoginForm from './components/login-form/login-form';
import './login.scss';

const authService = new AuthService();

function Login() {
  return (
    <AuthProvider value={authService}>
      <main className="login">
        <div className="login__center">
          <Logo />
          <LoginForm />
          <RepoLink />
        </div>
      </main>
    </AuthProvider>
  )
}

export default Login;
