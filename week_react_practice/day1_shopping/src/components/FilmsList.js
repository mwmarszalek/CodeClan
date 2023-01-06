import FilmItem from "./FilmItem";

const FilmsList = ({ films }) => {

    const filmNodes = films.map((film) => {

        return (
            <FilmItem film={film} key={film.id} />
        );
    });




    return (
        <div>
            <ul>
                {filmNodes}
            </ul>
        </div>
    )
}

export default FilmsList;