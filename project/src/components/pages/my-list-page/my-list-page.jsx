import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Logo from '../../UI/logo/logo';
import {fetchMyMovies} from '../../../store/api-actions';
import UserBlock from '../../UI/user-block/user-block';
import MovieList from '../../movie/movie-list/movie-list';
import LoadingScreen from '../../UI/loading-screen/loading-screen';
import {getIsMyMoviesLoaded, getMyMovies} from '../../../store/movies/selectors';
import {resetMyMovies} from '../../../store/movies/action';

function MyListPage() {
  const myMovies = useSelector(getMyMovies);
  const isMyMoviesLoaded = useSelector(getIsMyMoviesLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyMovies());
    return () => dispatch(resetMyMovies());
  }, [dispatch]);

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

export default MyListPage;
