class Team:

    def __init__(self,name,players,coach):
        self.name = name
        self.players = players
        self.coach = coach
        self.points = 0

    def add_player(self,player):
        self.players.append(player)

    def has_player(self,name):

        for item in self.players:
            if item == name:
                return True
        return False

    

    def play_game(self,has_won):

        if has_won:
            self.points +=3 

    










        
            
        










