from flask import Flask, render_template, request, redirect
from flask import Blueprint
from models.country import Country
import repositories.city_repository as city_repository
import repositories.country_repository as country_repository


countries_blueprint = Blueprint("countries", __name__)

#display all countries list
@countries_blueprint.route("/countries")
def countries():
    countries = country_repository.select_all()
    return render_template("countries/index.html", all_countries = countries)


# ADD COUNTRY IS NOT NEEDED HERE??? because it needs more parameters eg (city)

# #displays add country page
# @countries_blueprint.route("/countries/new", methods=['GET'])
# def new_city():
#     cities = city_repository.select_all()
#     return render_template("countries/new.html", all_cities = cities)

# # SAVES NEW COUNTRY OBJECT
# @countries_blueprint.route("/countries",  methods=['POST'])
# def create_country():
#     name   = request.form['name']
#     visited   = request.form['visited'] 
#     country = Country(name,visited)
#     country_repository.save(country)
#     return redirect('/cities')

#display single country
@countries_blueprint.route('/countries/<country_id>')
def get_country(country_id):
    country = country_repository.select(country_id)
    return render_template('countries/show.html', country=country)

# display form to edit city

@countries_blueprint.route('/countries/<country_id>/edit')
def edit_country(country_id):
    country = country_repository.select(country_id)
    cities = city_repository.select_all()
    return render_template('countries/edit.html', all_cities=cities, country=country)


# saves update form (country)
@countries_blueprint.route("/countries/<id>", methods=['POST'])
def update_country(id):
    name   = request.form['name']
    visited   = request.form['visited'] 
    country = Country(name,visited,id)
    country_repository.update(country)
    return redirect('/countries')

# delete country !!!DOESNT WORK - WHEN COUNTRY DELETED - CITY STAYS!!!!!

@countries_blueprint.route("/countries/<id>/delete", methods=['POST'])
def delete_country(id):
    country_repository.delete(id)
    return redirect('/countries')

# !!!!!DOESNT WORK - not displaying anything!!!!display countries visited

@countries_blueprint.route('/countries/visited')
def see_visited():
    countries = country_repository.see_visited()
    return render_template("cities/visited.html", all_countries = countries)