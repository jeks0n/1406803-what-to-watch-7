import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MOVIES = [...Array(20)].map((item, index) => ({
  id: index,
  name: 'Fantastic Beasts: The Crimes of Grindelwald',
  previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
}));

const PROMO = {
  id: 1,
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/the-grand-budapest-hotel.jpg',
  backgroundImage: 'img/the-grand-budapest-hotel-bg.jpg',
  backgroundColor: '#ffffff',
  videoLink: 'https://some-link',
  previewVideoLink: 'https://some-link',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
  rating: 8.9,
  scoresCount: 240,
  director: 'Wes Andreson',
  starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
  runtime: 99,
  genre: 'Comedy',
  released: 2014,
  isFavorite: false,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      movies={MOVIES}
      promo={PROMO}
    />
  </React.StrictMode>,
  document.getElementById('root'));
