import APIservice from './api.service';

class AuthService extends APIservice {
  constructor() {
    super('URL');
  }

  login({ login, sublogin, password }) {
    console.log('login ', login, sublogin, password);
  }

  logout() {
    console.log('logout');
  }
}

export default AuthService;
