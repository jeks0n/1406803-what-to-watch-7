import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Logo from '../../UI/logo/logo';
import UserBlock from '../../UI/user-block/user-block';
import MovieList from '../../movie/movie-list/movie-list';
import PlayButton from '../../UI/play-button/play-button';
import MyListButton from '../../UI/my-list-button/my-list-button';
import FilmTabs from './film-tabs/film-tabs';
import {fetchCurrentMovie, fetchCurrentMovieComments, fetchSimilarMovies} from '../../../store/api-actions';
import LoadingScreen from '../../UI/loading-screen/loading-screen';
import {AppRouteCreator, AuthorizationStatus} from '../../../const';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {getCurrentMovie, getIsCurrentMovieLoaded, getIsSimilarMoviesLoaded, getSimilarMovies} from '../../../store/movies/selectors';
import {getCurrentMovieComments, getIsCurrentMovieCommentsLoaded} from '../../../store/comments/selectors';
import {resetCurrentMovie, resetSimilarMovies} from '../../../store/movies/action';
import {resetCurrentMovieComments} from '../../../store/comments/action';

function FilmPage() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const currentMovie = useSelector(getCurrentMovie);
  const isCurrentMovieLoaded = useSelector(getIsCurrentMovieLoaded);
  const currentMovieComments = useSelector(getCurrentMovieComments);
  const isCurrentMovieCommentsLoaded = useSelector(getIsCurrentMovieCommentsLoaded);
  const similarMovies = useSelector(getSimilarMovies);
  const isSimilarMoviesLoaded = useSelector(getIsSimilarMoviesLoaded);

  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const resetState = () => {
      dispatch(resetCurrentMovie());
      dispatch(resetCurrentMovieComments());
      dispatch(resetSimilarMovies());
    };

    resetState();
    dispatch(fetchCurrentMovie(params.id));
    dispatch(fetchCurrentMovieComments(params.id));
    dispatch(fetchSimilarMovies(params.id));

    return resetState;
  }, [dispatch, params.id]);

  if (!isCurrentMovieLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const {
    id,
    name,
    genre,
    posterImage,
    backgroundImage,
    released,
  } = currentMovie;

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
            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton movie={currentMovie}/>
                <MyListButton movie={currentMovie} />
                {authorizationStatus === AuthorizationStatus.AUTH &&
                <Link href="add-review.html"
                  className="btn film-card__button"
                  to={`${AppRouteCreator.getAddReview(id)}`}
                  movie={currentMovie}
                >Add review
                </Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <FilmTabs movie={currentMovie} comments={currentMovieComments} isCommentsLoaded={isCurrentMovieCommentsLoaded} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList movies={similarMovies} isMoviesLoaded={isSimilarMoviesLoaded} />
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

export default FilmPage;
