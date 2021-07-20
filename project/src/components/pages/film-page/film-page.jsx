import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from '../../UI/logo/logo';
import UserBlock from '../../UI/user-block/user-block';
import MovieList from '../../movie/movie-list/movie-list';
import PlayButton from '../../UI/play-button/play-button';
import MyListButton from '../../UI/my-list-button/my-list-button';
import FilmTabs from './film-tabs/film-tabs';
import {fetchCurrentMovie, fetchCurrentMovieComments, fetchSimilarMovies} from '../../../store/api-actions';
import LoadingScreen from '../../UI/loading-screen/loading-screen';
import {ActionCreator} from '../../../store/action';
import PropTypes from 'prop-types';
import movieProp from '../../../utils/movie.prop';
import commentProp from '../../../utils/comment.prop';
import {AppRouteCreator, AuthorizationStatus} from '../../../const';

function FilmPage(props) {
  const params = useParams();
  const {
    authorizationStatus,
    currentMovie,
    getCurrentMovie,
    isCurrentMovieLoaded,
    getCurrentMovieComments,
    currentMovieComments,
    isCurrentMovieCommentsLoaded,
    similarMovies,
    getSimilarMovies,
    isSimilarMoviesLoaded,
    resetState,
  } = props;

  useEffect(() => {
    resetState();
    getCurrentMovie(params.id);
    getCurrentMovieComments(params.id);
    getSimilarMovies(params.id);

    return resetState;
  }, [resetState, getCurrentMovie, getCurrentMovieComments, getSimilarMovies, params]);

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

FilmPage.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  getCurrentMovie: PropTypes.func.isRequired,
  getCurrentMovieComments: PropTypes.func.isRequired,
  getSimilarMovies: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  currentMovie: movieProp,
  currentMovieComments: PropTypes.arrayOf(commentProp),
  similarMovies: PropTypes.arrayOf(movieProp).isRequired,
  isCurrentMovieLoaded: PropTypes.bool.isRequired,
  isCurrentMovieCommentsLoaded: PropTypes.bool.isRequired,
  isSimilarMoviesLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  currentMovie: state.currentMovie,
  currentMovieComments: state.currentMovieComments,
  similarMovies: state.similarMovies,
  isCurrentMovieLoaded: state.isCurrentMovieLoaded,
  isCurrentMovieCommentsLoaded: state.isCurrentMovieCommentsLoaded,
  isSimilarMoviesLoaded: state.isSimilarMoviesLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentMovie(id) {
    dispatch(fetchCurrentMovie(id));
  },
  getCurrentMovieComments(id) {
    dispatch(fetchCurrentMovieComments(id));
  },
  getSimilarMovies(id) {
    dispatch(fetchSimilarMovies(id));
  },
  resetState() {
    dispatch(ActionCreator.resetCurrentMovie());
    dispatch(ActionCreator.resetIsCurrentMovieLoaded());
    dispatch(ActionCreator.resetCurrentMovieComments());
    dispatch(ActionCreator.resetIsCurrentMovieCommentsLoaded());
    dispatch(ActionCreator.resetSimilarMovies());
    dispatch(ActionCreator.resetIsSimilarMoviesLoaded());
  },
});

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
