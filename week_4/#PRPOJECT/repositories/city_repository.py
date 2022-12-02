from db.run_sql import run_sql
from models.city import City
from models.country import Country
import repositories.country_repository as country_repository


def save(city):
    sql = "INSERT INTO cities (name,country_id,visited) VALUES (%s,%s,%s) RETURNING *"
    values = [city.name,city.country.id,city.visited]
    results = run_sql(sql,values)
    id = results[0]['id']
    city.id = id
    return city


def delete_all():
    sql = "DELETE  FROM cities"
    run_sql(sql)
    
def delete(id):
    sql = "DELETE  FROM cities WHERE id = %s"
    values = [id]
    run_sql(sql, values)
    
    
def select_all():
    cities = []

    sql = "SELECT * FROM cities"
    results = run_sql(sql)

    for row in results:
        country = country_repository.select(row['country_id'])
        city = City(row['name'], row['country'], row['visited'], country, row['id'] )
        cities.append(city)
    return cities

def select(id):
    city = None
    sql = "SELECT * FROM cities WHERE id = %s"
    values = [id]
    results = run_sql(sql, values)

    if results:
        result = results[0]
        country = country_repository.select(result['country_id'])
        city = City(result['name'], country, result['visited'], result['id'] )
    return city




