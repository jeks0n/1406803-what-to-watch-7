import {ALL_GENRES} from '../const';

export const getGenres = (movies, maxCount) => (
  [ALL_GENRES,
    ...([...new Set(movies.map((movie) => movie.genre))]
      .sort((genreA, genreB) => genreA.localeCompare(genreB))),
  ].slice(0, maxCount));