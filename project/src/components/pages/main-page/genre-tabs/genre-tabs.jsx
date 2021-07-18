import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../../store/action';
import PropTypes from 'prop-types';

function GenreTabs(props) {
  const {currentGenre, genres, filterMoviesByGenre} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li className={`catalog__genres-item ${currentGenre === genre && 'catalog__genres-item--active'}`} key={genre}>
          <a href="/#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              filterMoviesByGenre(evt.target.text);
            }}
          >{genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

GenreTabs.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterMoviesByGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  filterMoviesByGenre(genre) {
    dispatch(ActionCreator.setCurrentGenre(genre));
    dispatch(ActionCreator.filterMoviesByGenre(genre));
    dispatch(ActionCreator.resetNumberOfVisibleMovies(genre));
    dispatch(ActionCreator.checkShowMoreButtonVisibility());
  },
});

export {GenreTabs};
export default connect(mapStateToProps, mapDispatchToProps)(GenreTabs);
