from db.run_sql import run_sql

from models.artist import Artist
from models.album import Album



def save(artist):
    sql = "INSERT INTO artists (name) VALUES (%s) RETURNING *"
    
    values = [artist.name]
    results = run_sql(sql,values)
    id = results[0]['id']
    artist.id = id
    return artist

def delete_all():
    sql = "DELETE  FROM artists"
    run_sql(sql)
    
def select_all():
    artists = []

    sql = "SELECT * FROM artists"
    results = run_sql(sql)

    for row in results:
        artist = Artist(row['name'])
        artists.append(artist)
    return artists

def select_id(id):
    
    artist = None
    sql = "SELECT * FROM users where id = %s"
    values = [id]
    results = run_sql(sql,values)
    if results:
        result = results[0]
        artist = Artist(result['name'])
    return artist

