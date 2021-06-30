import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../../store/action';
import PropTypes from 'prop-types';
import movieProp from '../../../../utils/movie.prop';
import {getGenres} from '../../../../utils/movie';

const MAX_TABS_COUNT = 10;

function GenreTabs(props) {
  const {filteredGenre, filterMoviesByGenre, movies} = props;
  const [genres, setGenres] = useState(getGenres(movies, MAX_TABS_COUNT));

  useEffect(() => {
    setGenres(getGenres(movies, MAX_TABS_COUNT));
  }, [movies]);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li className={`catalog__genres-item ${filteredGenre === genre && 'catalog__genres-item--active'}`} key={genre}>
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
  filteredGenre: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(movieProp).isRequired,
  filterMoviesByGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filteredGenre: state.filteredGenre,
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  filterMoviesByGenre(genre) {
    dispatch(ActionCreator.setGenreToFilter(genre));
    dispatch(ActionCreator.filterMoviesByGenre(genre));
  },
});

export {GenreTabs};
export default connect(mapStateToProps, mapDispatchToProps)(GenreTabs);
