import React from 'react';
import ConsoleService from '../services/console.service';

const service = new ConsoleService();
const ConsoleContext = React.createContext({ service });

export const ConsoleProvider = ConsoleContext.Provider;
export default ConsoleContext;
