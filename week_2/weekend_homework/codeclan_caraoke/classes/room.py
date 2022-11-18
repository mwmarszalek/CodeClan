class Room:
    
    def __init__(self):
        self.guests = []
        self.songs = []
        
    def add_song(self,song):
        self.songs.append(song)
    
    def add_guest(self,guest):
        self.guests.append(guest)
        
    def remove_song(self,song):
        if len(self.songs) >= 1:
            self.songs.remove(song)
        return None
    
    def remove_guest(self,guest):
        if len(self.guests) >= 1:
            self.guests.remove(guest)
        return None
               
        
    def guest_count(self):
        return len(self.guests)
    
    def songs_count(self):
        return len(self.songs)
    
    def max_capacity(self):
        if len(self.guests) >= 3:
            return "You Shall Not Pass"
        return None
    
   