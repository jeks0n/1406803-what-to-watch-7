import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Logo from '../../UI/logo/logo';
import MovieList from '../../movie/movie-list/movie-list';
import PropTypes from 'prop-types';
import movieProp from '../../../utils/movie.prop';
import PlayButton from '../../UI/play-button/play-button';
import FilmTabs from './film-tabs/film-tabs';

function FilmPage(props) {
  const params = useParams();
  const [movie] = props.movies.filter((film) => film.id === +params.id);
  const {
    name,
    genre,
    posterImage,
    backgroundImage,
    released,
  } = movie;
  // Временно
  const similarMovies = props.movies.slice().sort(() => Math.random() - 0.5).slice(0, 4);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

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

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton movie={movie}/>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link href="add-review.html"
                  className="btn film-card__button"
                  to={`/films/${movie.id}/review`}
                  movies={[movie]}
                >Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <FilmTabs movie={movie}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList movies={similarMovies} />
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

FilmPage.propTypes = {
  movies: PropTypes.arrayOf(movieProp),
};

export default FilmPage;
