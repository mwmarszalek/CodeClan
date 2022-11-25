from flask import render_template,request
from app import app
from models.event_list import list_of_events,get_event,add_event
from models.event import Event

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/events')
def events():
    return render_template('list_of_events.html',list_of_events=list_of_events)

@app.route('/events/<int:event_index>')
def event(event_index):
    my_event = get_event(event_index)
    return render_template('single_event.html',event=my_event)

@app.route('/events/new')
def new_event():
    return render_template('new_event.html')

@app.route('/events', methods=['POST'])
def save_event():
    form_data = request.form
    event_date= form_data['event_date']
    event_name= form_data['event_name']
    event_no_of_guests = form_data['event_no_of_guests']
    event_location = form_data['event_location']
    event_description = form_data['event_description']
    recurring = 'recurring' in form_data
    new_event = Event(event_date,event_name,event_no_of_guests,event_location,event_description,recurring)
    add_event(new_event)
    return render_template('list_of_events.html', list_of_events=list_of_events)
