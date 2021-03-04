import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { RouterComponent } from './routers';


function App() {
  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
}

export default App;
