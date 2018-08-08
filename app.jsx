import React from 'react';
import ReactDOM from 'react-dom';
import ZoomIn from './buttons/zoom_in';
import ZoomOut from './buttons/zoom_out';

const App = () => (
  <div className="app">
    <img
      className="hero-image"
      src="https://bonobos-prod-s3.imgix.net/products/18158/original/SHIRT_ShortSleeve_ZebraRun_JetBlack_hero1.jpg?h=7000&w=7000"
      alt="short sleeve shirt jet black running zebras" />
    <ul className="button-list">
      <ZoomIn />
      <ZoomOut />
    </ul>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
