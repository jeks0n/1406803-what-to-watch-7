import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Logo from '../../UI/logo/logo';
import {fetchMyMovies} from '../../../store/api-actions';
import UserBlock from '../../UI/user-block/user-block';
import MovieList from '../../movie/movie-list/movie-list';
import PropTypes from 'prop-types';
import movieProp from '../../../utils/movie.prop';
import {ActionCreator} from '../../../store/action';
import LoadingScreen from '../../UI/loading-screen/loading-screen';

function MyListPage(props) {
  const {
    myMovies,
    isMyMoviesLoaded,
    getMyMovies,
    resetMyMovies,
  } = props;

  useEffect(() => {
    getMyMovies();
    return resetMyMovies;
  }, [getMyMovies, resetMyMovies]);

  if (!isMyMoviesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MovieList movies={myMovies} isMoviesLoaded={isMyMoviesLoaded} />
      </section>

      <footer className="page-footer">
        <Logo isFooter />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

MyListPage.propTypes = {
  getMyMovies: PropTypes.func.isRequired,
  myMovies: PropTypes.arrayOf(movieProp).isRequired,
  isMyMoviesLoaded: PropTypes.bool.isRequired,
  resetMyMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myMovies: state.myMovies,
  isMyMoviesLoaded: state.isMyMoviesLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getMyMovies() {
    dispatch(fetchMyMovies());
  },
  resetMyMovies() {
    dispatch(ActionCreator.resetIsMyMoviesLoaded());
    dispatch(ActionCreator.resetMyMovies());
  },
});

export {MyListPage};
export default connect(mapStateToProps, mapDispatchToProps)(MyListPage);
