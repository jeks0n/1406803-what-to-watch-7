import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from '../../UI/logo/logo';
import UserBlock from '../../UI/user-block/user-block';
import ReviewForm from './review-form/review-form';
import movieProp from '../../../utils/movie.prop';
import PropTypes from 'prop-types';
import {fetchCurrentMovie, fetchCurrentMovieComments} from '../../../store/api-actions';
import {ActionCreator} from '../../../store/action';
import LoadingScreen from '../../UI/loading-screen/loading-screen';

function AddReviewPage(props) {
  const params = useParams();
  const {
    currentMovie,
    getCurrentMovie,
    getCurrentMovieComments,
    isCurrentMovieLoaded,
    resetState,
  } = props;

  useEffect(() => {
    resetState();
    getCurrentMovie(params.id);
    getCurrentMovieComments(params.id);

    return resetState;
  }, [resetState, getCurrentMovie, getCurrentMovieComments, params]);

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
                <a href="film-page.html" className="breadcrumbs__link">{name}</a>
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

AddReviewPage.propTypes = {
  getCurrentMovie: PropTypes.func.isRequired,
  getCurrentMovieComments: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  currentMovie: movieProp.isRequired,
  isCurrentMovieLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentMovie: state.currentMovie,
  isCurrentMovieLoaded: state.isCurrentMovieLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentMovie(id) {
    dispatch(fetchCurrentMovie(id));
  },
  getCurrentMovieComments(id) {
    dispatch(fetchCurrentMovieComments(id));
  },
  resetState() {
    dispatch(ActionCreator.resetCurrentMovie());
    dispatch(ActionCreator.resetIsCurrentMovieLoaded());
  },
});

export {AddReviewPage};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewPage);
