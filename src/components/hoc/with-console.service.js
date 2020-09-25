import React, { useContext } from 'react';
import ConsoleContext from '../../context/console-context';

function withConsoleService(Component) {
  return function(props) {
    const context = useContext(ConsoleContext);

    return (
      <Component {...props} service={context.service} />
    )
  }
}

export default withConsoleService;
