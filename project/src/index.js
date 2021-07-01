import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import movies from './mocks/films';
import {reducer} from './store/reducer';

const promo = movies[5];

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        movies={movies}
        promo={promo}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
