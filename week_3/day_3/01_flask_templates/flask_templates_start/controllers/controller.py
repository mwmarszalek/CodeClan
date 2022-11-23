from flask import render_template,request # ADDED
from app import app
from models.todo_list import tasks, add_new_task
from models.task import Task




@app.route('/tasks')
def index():
    return render_template('index.html', title='Home', tasks=tasks)

@app.route('/tasks',methods=['POST'])
def add_task():
    form_data = request.form
    title = form_data['title']
    description = form_data['description']
    new_task = Task(title,description,False)
    add_new_task(new_task)
    return render_template('index.html', title='Home', tasks=tasks)