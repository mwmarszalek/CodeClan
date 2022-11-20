
import random



list_of_players = ["John","Daria","Jack"]
room_list = ["Room 1","Room 2","Room 3"]
song_list = ["Coma Black","Personal Jesus","King Kill 33"]
room_1_guest_list = []
room_2_guest_list = []
room_3_guest_list = []




def check_if_player_recognised(list,name):
    
    
    for item in list:
        if item == name:
            return f"{name} let's start playing!"
        return False
    
    
def assign_player_to_room(room_list):
    
    chosen = random.choice(room_list)
    return chosen
    
    

########################### Script ###############################

player_name = input("Plase type in your name ")

while True:

    if check_if_player_recognised(list_of_players,player_name) == False:
        break#jak wpisze zle imie to while loop sie przertwa
    assigned_room = assign_player_to_room(room_list)
    
    print(f"{player_name} assigned to {assigned_room}")
    
    
    if assigned_room == "Room 1":
        room_1_guest_list.append(player_name)
        print(f"there are {len(room_1_guest_list)} player(s) currently in {assigned_room}. List of players: {room_1_guest_list}")
    if assigned_room == "Room 2":
        room_2_guest_list.append(player_name)
        print(f"there are {len(room_2_guest_list)} player(s) currently in {assigned_room}. List of players: {room_2_guest_list}")
    if assigned_room == "Room 3":
        room_3_guest_list.append(player_name)
        print(f"there are {len(room_3_guest_list)} player(s) currently in {assigned_room}. List of players: {room_3_guest_list}")
     
    chosen_song = input(f"Please choose one song from the list: {song_list} ")
    
    
    if chosen_song in song_list:
        print(f"let's start singing {chosen_song}! I hope you know the lyrics!")
        if chosen_song == "Coma Black":
            print("My mouth was a crib and it was growing lies I didn't know what love was on that day Heart's a tiny blood clot, I picked at it It never heals, it never goes away")
        elif chosen_song == "Personal Jesus":
            print("Your own personal Jesus Someone to hear your prayers Someone who cares Your own personal Jesus Someone to hear your prayers Someone who's there")
        elif chosen_song == "King Kill 33":
            "And I am not sorry, and I am not sorry This is what you deserve And I am not sorry, and I am not sorry This is what you deserve And I am not sorry, and I am not sorry (King Kill 33!)"
        else:
            print("Song not in list!")
            
    else:
        print("Song not in list, try again")
        
    
    
    break
    
    
    


    


