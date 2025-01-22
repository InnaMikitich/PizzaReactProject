import React from 'react';

import {Header} from './Components';
import {Home, Cart} from './pages';




function App() {

  return (
    <div className="wrapper">
   <Header />
    <div className="content">
    <Home />
    </div>
  </div>
  );
}

export default App;
