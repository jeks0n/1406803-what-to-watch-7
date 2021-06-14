import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import movies from './mocks/films';

const promo = movies[5];

ReactDOM.render(
  <React.StrictMode>
    <App
      movies={movies}
      promo={promo}
    />
  </React.StrictMode>,
  document.getElementById('root'));
