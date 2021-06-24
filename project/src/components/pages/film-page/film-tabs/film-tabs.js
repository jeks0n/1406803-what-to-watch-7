import React, {useState} from 'react';
import FilmOverview from './film-overview/film-overview';
import FilmDetails from './film-details/film-details';
import FilmReviews from './film-reviews/film-reviews';
import {MovieTab} from '../../../../const';
import movieProp from '../../../../utils/movie.prop';

const getComponentByType = (type, movie) => {
  switch (type) {
    case MovieTab.OVERVIEW:
      return <FilmOverview movie={movie} />;
    case MovieTab.DETAILS:
      return <FilmDetails movie={movie} />;
    case MovieTab.REVIEWS:
      return <FilmReviews movie={movie} />;
    default:
      return <p>There is no information yet</p>;
  }
};

function FilmTabs({movie}) {
  const [activeTab, setActiveTab] = useState(MovieTab.OVERVIEW);
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(MovieTab).map((tab) => (
            <li
              key={tab}
              className={tab === activeTab
                ? 'film-nav__item film-nav__item--active'
                : 'film-nav__item'}
              onClick={() => setActiveTab(tab)}
            >
              <a href="/#" onClick={(evt) => evt.preventDefault()} className="film-nav__link">{tab}</a>
            </li>))}
        </ul>
      </nav>

      {getComponentByType(activeTab, movie)}
    </div>
  );
}

FilmTabs.propTypes = {
  movie: movieProp,
};

export default FilmTabs;
