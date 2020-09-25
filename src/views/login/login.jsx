import React from 'react';
import Logo from '../../components/ui/logo/logo';
import RepoLink from '../../components/ui/repo-link/repo-link';

import { AuthProvider } from '../../context/auth-context';
import AuthService from '../../services/auth.service';
import LoginForm from './components/login-form/login-form-container';
import './login.scss';

const service = new AuthService();

function Login() {
  return (
    <main className="login">
      <div className="login__center">
        <Logo />
        <AuthProvider value={service}>
          <LoginForm />
        </AuthProvider>
        <RepoLink />
      </div>
    </main>
  )
}

export default Login;
