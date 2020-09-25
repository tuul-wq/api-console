import React, { useContext } from 'react';
import AuthContext from '../../context/auth-context';

function withAuthService(Component) {
  return function(props) {
    const service = useContext(AuthContext);

    return (
      <Component {...props} service={service} />
    )
  }
}

export default withAuthService;
