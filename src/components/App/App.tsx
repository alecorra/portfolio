import React from 'react';
import { Navbar } from '../Navbar';

import './App.scss';

export const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <Navbar />
      <h1 className="app__title">PORTFOLIO</h1>
    </div>
  );
};

export default App;
