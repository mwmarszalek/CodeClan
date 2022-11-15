class Bus:
    
    def __init__(self,route_number,destination):
        self.route_number = route_number
        self.destination = destination
        self.passengers = []
        
    def drive(self):
        return "Brum brum"
    
    def pick_up(self,passenger_1):
        self.passengers.append(passenger_1)
        
    def drop_off(self,passenger_2):
        self.passengers.remove(passenger_2)
        
    def empty(self):
        self.passengers.clear()
        
    def passenger_count(self):
        return len(self.passengers)
    
    def pick_up_from_stop(self,bus_stop):
        
        for item in bus_stop.queue:
            self.pick_up(item)
        bus_stop.clear()
        
        
        
        
        
        
        
        

        
        
    
    