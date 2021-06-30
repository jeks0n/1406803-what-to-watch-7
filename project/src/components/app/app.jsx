import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import FilmPage from '../pages/film-page/film-page';
import MainPage from '../pages/main-page/main-page';
import MyListPage from '../pages/my-list-page/my-list-page';
import NoFoundPage from '../pages/no-found-page/no-found-page';
import PlayerPage from '../pages/player-page/player-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import movieProp from '../../utils/movie.prop';

function App(props) {
  const {
    movies,
    promo,
  } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage promo={promo} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignInPage />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyListPage movies={movies} />
        </Route>
        <Route exact path={AppRoute.FILM} >
          <FilmPage movies={movies} />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReviewPage movies={movies} />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <PlayerPage movies={movies} />
        </Route>
        <Route>
          <NoFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  movies: PropTypes.arrayOf(movieProp),
  promo: movieProp,
};

export default App;
