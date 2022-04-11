import React from 'react';
import css from './App.css'
import Counter from './components/Counter';
import Fetcher from './components/Fetcher';

import clouds from './images/clouds-g49df5b05e_1920.png';

const App = () => (
  <>
    <div className="title">
      Hello, Webpack!!!!
    </div>
    <hr />
    <Counter />
    <Fetcher />
    <hr />
    <img src={clouds} />
  </>
);
export default App;