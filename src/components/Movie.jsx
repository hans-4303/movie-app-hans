import '../Movie.css'
import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movie = ({id, title, year, summary, poster, genres}) => {
  return (
    <div className='movie'>
        <Link to={{pathname: '/movie-detail', state: { year, title, summary, poster, genres }}}>
            <img src={poster} alt={title} title={title} />
            <div className='movie-data'>
                <h3 className='movie-title'>{title}</h3>
                <h5 className='movie-year'>{year}</h5>
                <p className='movie-summary'>{summary.slice(0, 180)}180자 이상은 생략됩니다</p>
                <ul className='movie-genres'>
                    {genres.map((genre, index) => {
                        return (<li className='movie-genre' key={index}>{genre}</li>);
                    })}
                </ul>
            </div>
        </Link>
    </div>
  )
}

/* 선언된 컴포넌트에 대한 prop 정의이므로
반드시 컴포넌트 아래에 적어둘 수 있도록 한다. */

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie
