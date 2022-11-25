from models.event import Event
from datetime import datetime

event1 = Event(datetime(2022,12,12,23,00),"Deborah De Luca",230,"SubClub","Techno",True)
event2 = Event(datetime(2023,5,17,21,45),"Cradle of Filth",490,"SSE","Black Metal",False)
event3 = Event(datetime(2022,6,12,22,00),"Aphex Twin",990,"O2 Academy","IDM",True)

list_of_events = [event1,event2,event3]


def get_event(event_index):
    return list_of_events[event_index]

def add_event(event):
    list_of_events.append(event)