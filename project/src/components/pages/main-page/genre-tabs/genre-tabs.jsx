import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCurrentGenre, getGenres} from '../../../../store/movies/selectors';
import {setCurrentGenre} from '../../../../store/movies/action';
import {resetNumberOfVisibleMovies} from '../../../../store/movies/action';

function GenreTabs() {
  const currentGenre = useSelector(getCurrentGenre);
  const genres = useSelector(getGenres);

  const dispatch = useDispatch();

  const setMoviesFilter = (genre) => {
    dispatch(setCurrentGenre(genre));
    dispatch(resetNumberOfVisibleMovies());
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) => (
        <li className={`catalog__genres-item ${currentGenre === genre && 'catalog__genres-item--active'}`} key={genre}>
          <a href="/#"
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              setMoviesFilter(evt.target.text);
            }}
          >{genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenreTabs;
