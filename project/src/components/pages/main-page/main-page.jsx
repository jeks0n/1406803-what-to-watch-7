import React from 'react';
import PropTypes from 'prop-types';
import PromoMovieCard from '../../movie/promo-movie/promo-movie';
import MovieList from '../../movie/movie-list/movie-list';
import Logo from '../../UI/logo/logo';
import movieProp from '../../../utils/movie.prop';
import {Genre} from '../../../const';

function MainPage(props) {
  const genres = Object.values(Genre);

  return (
    <>
      <section className="film-card">
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a href="/#" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <PromoMovieCard movie={props.promo} />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genres.map((genre, index) => (
              <li className={`catalog__genres-item ${index === 0 && 'catalog__genres-item--active'}`} key={genre}>
                <a href="/#" className="catalog__genres-link">{genre}</a>
              </li>
            ))}
          </ul>

          <MovieList movies={props.movies} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <Logo isFooter />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

MainPage.propTypes = {
  movies: PropTypes.arrayOf(movieProp),
  promo: movieProp,
};

export default MainPage;
