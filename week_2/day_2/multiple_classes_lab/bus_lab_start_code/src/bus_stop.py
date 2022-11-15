class BusStop:
    
    def __init__(self,name):
        self.name = name
        self.queue = []
        
    def add_to_queue(self,name):
        self.queue.append(name)
        
    def queue_length(self):
        return len(self.queue)
    
    def clear(self):
        self.queue.clear()
        
   
  