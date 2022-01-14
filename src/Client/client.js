import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../Components/Home'

ReactDOM.hydrate(
  <Home />,
  document.getElementById('root')
);