const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.addFilms = function(films) {
  this.films.push(films);
}

Cinema.prototype.listAllFilms = function(films) {
  const  listofFilmTitles = films.map((film) => {
    return film;
  });
  return listofFilmTitles
}

Cinema.prototype.findFilmByTitle = function(film_title) {
  result = this.films.filter((film) => {
    return film.title === film_title;
  });
  return result[0];
}
// maybe use .find for the above one?

Cinema.prototype.filterByGenre = function(genre) {
  result = this.films.filter((film) => {
    return film.genre === genre;
  });
  return result
}

Cinema.prototype.filterByYear = function(year) {
  result = this.films.filter((film) => {
    return film.year === year;
  });
  return result
}

Cinema.prototype.filterByLength = function(length) {
  result = this.films.filter((film) => {
    return film.length > length;
  });
  return result
}

Cinema.prototype.totalRunningTime = function(films) {
  const total = this.films.reduce((total,film) => {
    return total += film.length;
  },0);

  return total
}


