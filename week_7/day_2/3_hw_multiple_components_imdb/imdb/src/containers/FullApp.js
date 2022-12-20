import React, {useState} from 'react';
import FilmsList from '../components/FilmsList';
import LinkToIMDB from '../components/LinkToIMDB';
import Title from '../components/Title';
import AddFilmForm from '../components/AddFilmForm';


const FullApp = () => {

    const [films,setFilms] = useState([
        {
            id: 1,
            name: "Spider-Man: Into the Spider-Verse",
            url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
            id: 2,
            name: "Life Itself",
            url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
            id: 3,
            name: "Mary Queen of Scots",
            url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
            id: 4,
            name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
            id: 5,
            name: "Captain Marvel",
            url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
        ])

        const addFilm = (submittedFilm) => {
            submittedFilm.id = films.id;
            const updatedFilms = [...films,submittedFilm];
            setFilms(updatedFilms);
        }

    return (
        <div className="wrapper">
        <Title />
        <ul><FilmsList films={films}></FilmsList></ul>
        <LinkToIMDB />
        {/* <AddFilmForm onFilmSubmit={(film) => addFilm(film)}/> */}


        </div>
    );

}


export default FullApp;