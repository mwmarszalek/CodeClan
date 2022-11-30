import pdb
from models.album import Album
from models.artist import Artist


import  repositories.album_repository as album_repository
import repositories.artist_repository as artist_repository



artist1 = Artist('Led Zeppelin')
artist_repository.save(artist1)
artist2 = Artist('Korn')
artist_repository.save(artist2)

album1 = Album("Stairway To Heaven","Rock",artist1)
album_repository.save(album1)
album2 = Album('Take A Look In The Mirror',"Hard Rock",artist2)
album_repository.save(album2)

# album_repository.delete_all()
# artist_repository.delete_all()



