import React from 'react';

import { ConsoleProvider } from '../../context/console-context';
import { AuthProvider } from '../../context/auth-context';
import ConsoleService from '../../services/console.service';
import Actions from './components/actions/actions';
import Header from './components/header/header';
import History from './components/history/history';
import Query from './components/query/query';
import './console.scss';

const consoleService = new ConsoleService();

function Console() {
  return (
    <>
      <Header />
      <main className="console">
        <History />
        <Query />
      </main>
      <Actions />
    </>
    // <>
    //   <AuthProvider value={consoleService}>
    //     <Header />
    //   </AuthProvider>
    //   <ConsoleProvider value={consoleService}>
    //     <main className="console">
    //       <History />
    //       <Query />
    //     </main>
    //   </ConsoleProvider>
    //   <Actions />
    // </>
  )
}

export default Console;
