import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import {APP_ROUTE_CREATOR} from '../../const';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import FilmPage from '../pages/film-page/film-page';
import MainPage from '../pages/main-page/main-page';
import MyListPage from '../pages/my-list-page/my-list-page';
import NoFoundPage from '../pages/no-found-page/no-found-page';
import PlayerPage from '../pages/player-page/player-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import browserHistory from '../../browser-history';

function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={APP_ROUTE_CREATOR.getMain()}>
          <MainPage />
        </Route>
        <Route exact path={APP_ROUTE_CREATOR.getSignIn()}>
          <SignInPage />
        </Route>
        <PrivateRoute
          exact
          path={APP_ROUTE_CREATOR.getMyList()}
          render={() => <MyListPage />}
        >
        </PrivateRoute>
        <Route exact path={APP_ROUTE_CREATOR.getFilm()} >
          <FilmPage />
        </Route>
        <PrivateRoute
          exact
          path={APP_ROUTE_CREATOR.getAddReview()}
          render={() => <AddReviewPage />}
        >
        </PrivateRoute>
        <Route exact path={APP_ROUTE_CREATOR.getPlayer()}>
          <PlayerPage />
        </Route>
        <Route>
          <NoFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
