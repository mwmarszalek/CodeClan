from db.run_sql import run_sql

from models.artist import Artist
from models.album import Album
import repositories.artist_repository as artist_repository



def save(album):
    sql = "INSERT INTO albums (title,genre,artist_id) VALUES (%s,%s,%s) RETURNING *"#potentially add artist to arguments?
    
    values = [album.title,album.genre,album.artist.id]
    results = run_sql(sql,values)
    id = results[0]['id']
    album.id = id
    return album

def delete_all():
    sql = "DELETE  FROM albums"
    run_sql(sql)
    

