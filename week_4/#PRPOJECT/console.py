import pdb
from models.country import Country
from models.city import City

import repositories.city_repository as city_repository
import repositories.country_repository as country_repository


# CLEAR TABLES IF POPULATED

city_repository.delete_all()
country_repository.delete_all()


# ADD NEW COUNTRIES TO DB

country1 = Country("Russia",True)
country_repository.save(country1)

country2 = Country("Poland",True)
country_repository.save(country2)

country3 = Country("Spain",False)
country_repository.save(country3)
 


# ADD NEW CITIES TO DB
city1 = City("Iquitos",country3,False)
city_repository.save(city1)

city2 = City("Lima",country3,True)
city_repository.save(city2)

city3 = City("Warsaw",country2,True)
city_repository.save(city3)

city4 = City("Gdansk",country2,True)
city_repository.save(city4)

city5 = City("Las Palmas",country3,False)
city_repository.save(city5)

city6 = City("Moscow",country1,True)
city_repository.save(city6)