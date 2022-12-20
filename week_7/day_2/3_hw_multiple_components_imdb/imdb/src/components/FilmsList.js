import React from 'react';
import SingleFilm from './SingleFilm';


const FilmsList = ({films}) => {

    const filmNodes = films.map(film => {
        return (
            <li key={film.id}><a href={film.url}><SingleFilm name={film.name} /></a></li>
        )
    })

    return (
        <>
        {filmNodes}
        </>
    )

}


export default FilmsList;