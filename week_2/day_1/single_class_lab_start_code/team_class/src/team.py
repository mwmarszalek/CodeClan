class Team:

    def __init__(self,name,names,coach):
        self.name = name
        self.names = names
        self.coach = coach

    def add_player(self,player):
        self.names.append(player)

    def has_player(self,name):

        for item in self.names:
            if item == name:
                return True
        return False


        
            
        










