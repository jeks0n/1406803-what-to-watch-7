import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Logo from '../../UI/logo/logo';
import PromoMovieCard from '../../movie/promo-movie/promo-movie';
import GenreTabs from './genre-tabs/genre-tabs';
import MovieList from '../../movie/movie-list/movie-list';
import PropTypes from 'prop-types';
import movieProp from '../../../utils/movie.prop';
import ShowMoreButton from '../../UI/show-more-button/show-more-button';
import {ActionCreator} from '../../../store/action';

function MainPage(props) {
  const {
    movies,
    promo,
    numberOfVisibleMovies,
    increaseNumberOfVisibleMovies,
    resetNumberOfVisibleMovies,
    isShowMoreButtonVisible,
  } = props;
  useEffect(() => resetNumberOfVisibleMovies, [resetNumberOfVisibleMovies]);

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

        <PromoMovieCard movie={promo} />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreTabs />

          <MovieList movies={movies} numberOfVisibleMovies={numberOfVisibleMovies} />

          {isShowMoreButtonVisible && <ShowMoreButton onClickEvent={increaseNumberOfVisibleMovies} />}
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
  numberOfVisibleMovies: PropTypes.number.isRequired,
  increaseNumberOfVisibleMovies: PropTypes.func.isRequired,
  resetNumberOfVisibleMovies: PropTypes.func.isRequired,
  isShowMoreButtonVisible: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  numberOfVisibleMovies: state.numberOfVisibleMovies,
  isShowMoreButtonVisible: state.isShowMoreButtonVisible,
});

const mapDispatchToProps = (dispatch) => ({
  increaseNumberOfVisibleMovies() {
    dispatch(ActionCreator.increaseNumberOfVisibleMovies());
    dispatch(ActionCreator.checkShowMoreButtonVisibility());
  },
  resetNumberOfVisibleMovies() {
    dispatch(ActionCreator.resetNumberOfVisibleMovies());
    dispatch(ActionCreator.checkShowMoreButtonVisibility());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
