import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Logo from '../../UI/logo/logo';
import UserBlock from '../../UI/user-block/user-block';
import ReviewForm from './review-form/review-form';
import {fetchCurrentMovie, fetchCurrentMovieComments} from '../../../store/api-actions';
import LoadingScreen from '../../UI/loading-screen/loading-screen';
import {getCurrentMovie, getIsCurrentMovieLoaded} from '../../../store/movies/selectors';
import {resetCurrentMovie} from '../../../store/movies/action';

function AddReviewPage() {
  const currentMovie = useSelector(getCurrentMovie);
  const isCurrentMovieLoaded = useSelector(getIsCurrentMovieLoaded);

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(resetCurrentMovie());
    dispatch(fetchCurrentMovie(params.id));
    dispatch(fetchCurrentMovieComments(params.id));

    return () => dispatch(resetCurrentMovie());
  }, [dispatch, params.id]);

  if (!isCurrentMovieLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const {
    id,
    name,
    backgroundImage,
    posterImage,
  } = currentMovie;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="/#" className="breadcrumbs__link">{name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a href="/#" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
        </div>
      </div>

      <div className="add-review">
        <ReviewForm movieId={id} />
      </div>

    </section>
  );
}

export default AddReviewPage;
