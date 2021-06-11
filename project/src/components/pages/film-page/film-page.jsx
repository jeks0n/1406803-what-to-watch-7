import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Logo from '../../UI/logo/logo';
import MovieList from '../../movie/movie-list/movie-list';
import PropTypes from 'prop-types';
import movieProp from '../../../utils/movie.prop';
import appRoute from '../../../utils/app-root';
import Play from '../../UI/play/play';

const MOVIE_GRADES = [
  ['Bad', [0, 3]],
  ['Normal', [3, 5]],
  ['Good', [5, 8]],
  ['Very good', [8, 10]],
  ['Awesome', [10, Infinity]],
];

function FilmPage(props) {
  const params = useParams();
  const [movie] = props.movies.filter((film) => film.id === +params.id);
  const {
    name,
    description,
    director,
    actors,
    genre,
    posterImage,
    backgroundImage,
    released,
    rating,
    scoresCount,
  } = movie;
  const ratingText = rating.toFixed(1);
  const [movieLevel] = MOVIE_GRADES.find(([, grade]) => (rating >= grade[0] && rating < grade[1]));
  const actorsText = actors.join(', ');
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
                <Play movie={movie}/>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link href="add-review.html"
                  className="btn film-card__button"
                  to={`${appRoute.getAddPreview(movie.id)}`}
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

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{ratingText}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{movieLevel}</span>
                  <span className="film-rating__count">{scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{description}</p>

                <p className="film-card__director"><strong>Director: {director}</strong></p>

                <p className="film-card__starring">
                  <strong>Starring: {actorsText}</strong>
                </p>
              </div>
            </div>
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
