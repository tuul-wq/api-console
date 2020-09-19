import React from 'react';

import { ConsoleProvider } from '../../context/console-context';
import ConsoleService from '../../services/console.service';
import Actions from './components/actions/actions';
import Header from './components/header/header';
import History from './components/history/history';
import Query from './components/query/query';
import './console.scss';

const consoleService = new ConsoleService();

function Console() {
  return (
    <ConsoleProvider value={consoleService}>
      <main className="console">
        <Header />
        <History />
        <Query />
        <Actions />
      </main>
    </ConsoleProvider>
  )
}

export default Console;
