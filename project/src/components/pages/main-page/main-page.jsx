import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Logo from '../../UI/logo/logo';
import UserBlock from '../../UI/user-block/user-block';
import PromoMovieCard from '../../movie/promo-movie/promo-movie';
import GenreTabs from './genre-tabs/genre-tabs';
import MovieList from '../../movie/movie-list/movie-list';
import ShowMoreButton from '../../UI/show-more-button/show-more-button';
import {fetchMovies, fetchPromoMovie} from '../../../store/api-actions';
import {getIsMoviesLoaded, getMovies, getPromoMovie, getIsShowMoreButtonVisible, getNumberOfVisibleMovies} from '../../../store/movies/selectors';
// import {getIsShowMoreButtonVisible, getNumberOfVisibleMovies} from '../../../store/movies/selectors';
import {increaseNumberOfVisibleMovies, resetNumberOfVisibleMovies, checkShowMoreButtonVisibility} from '../../../store/movies/action';

function MainPage(props) {
  const movies = useSelector(getMovies);
  const promoMovie = useSelector(getPromoMovie);
  const numberOfVisibleMovies = useSelector(getNumberOfVisibleMovies);
  const isMoviesLoaded = useSelector(getIsMoviesLoaded);
  const isShowMoreButtonVisible = useSelector(getIsShowMoreButtonVisible);

  const dispatch = useDispatch();

  const addMoreVisibleMovies = () => {
    dispatch(increaseNumberOfVisibleMovies());
    dispatch(checkShowMoreButtonVisibility());
  };

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchPromoMovie());

    return () => {
      dispatch(resetNumberOfVisibleMovies());
      dispatch(checkShowMoreButtonVisibility());
    };
  }, [dispatch]);

  return (
    <>
      <section className="film-card">
        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />
          <UserBlock />
        </header>

        <PromoMovieCard movie={promoMovie} />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreTabs />

          <MovieList movies={movies} numberOfVisibleMovies={numberOfVisibleMovies} isMoviesLoaded={isMoviesLoaded} />

          {isShowMoreButtonVisible && <ShowMoreButton onClickEvent={addMoreVisibleMovies} />}
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

export default MainPage;
