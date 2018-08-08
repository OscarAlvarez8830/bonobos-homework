import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    Hello World!
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
