const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function() {
    films_list = cinema.listAllFilms(films);
    assert.deepStrictEqual(films,films_list)
  });

  it('should be able to find a film by title', function() {
    film_to_find = moonlight
    actual = cinema.findFilmByTitle('Moonlight');
    assert.strictEqual(actual,moonlight);
  });

  it('should be able to filter films by genre', function() {
    genre_to_filter_by = 'drama';
    actual = cinema.filterByGenre(genre_to_filter_by);
    assert.deepStrictEqual(actual,[moonlight,trainspotting]);
  });

  it('should be able to check whether there are some films from a particular year', function() {
    year_to_filter_by = 2017;
    actual = cinema.filterByYear(year_to_filter_by);
    assert.deepStrictEqual(actual,[bladeRunner,dunkirk,trainspotting]);
  });
  it('should be able to check whether there are no films from a particular year', function() {
    year_to_filter_by = 3142;
    actual = cinema.filterByYear(year_to_filter_by);
    assert.deepStrictEqual(actual,[]);
  });
  it('should be able to check whether all films are over a particular length', function() {
    length_to_filter_by = 120;
    actual = cinema.filterByLength(length_to_filter_by);
    assert.deepStrictEqual(actual,[bladeRunner,blackPanther]);
  });
  it('should be able to calculate total running time of all films', function() {
    actual = cinema.totalRunningTime();
    assert.strictEqual(actual,622)
  });

});
