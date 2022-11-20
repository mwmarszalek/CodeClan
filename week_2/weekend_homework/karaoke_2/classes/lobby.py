class Lobby:
    
    def __init__(self,room_list,guest_queue): 
        self.room_list = ["Room 1","Room 2","Room 3"]
        self.guest_queue = ["John","Daria","Jack"]
        
        
    def how_many_rooms(self):
        
        return len(self.room_list)
    