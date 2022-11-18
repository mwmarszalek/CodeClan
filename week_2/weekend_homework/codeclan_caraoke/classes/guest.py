from classes import room

class Guest:
    
    def __init__(self,guest_name,wallet,fav_song):
        self.guest_name = guest_name
        self.wallet = wallet
        self.fav_song = fav_song
        
    def check_fav_song(self,room):
        for song in room:
            if song.song_name == self.fav_song:
                return "Woohoo"
        return None