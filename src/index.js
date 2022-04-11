import React from 'react';
import App from './App';

// before 18
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

// after 18
import { createRoot } from 'react-dom/client';

console.log(process.env.MODE); // dotenv-webpack log

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);