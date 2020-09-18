import React from 'react';

import { ConsoleProvider } from '../../context/console-context';
import ConsoleService from '../../services/console.service';
import './console.scss';

const consoleService = new ConsoleService();

function Console() {
  return (
    <ConsoleProvider value={consoleService}>
      <main className="console">
        console
      </main>
    </ConsoleProvider>
  )
}

export default Console;
