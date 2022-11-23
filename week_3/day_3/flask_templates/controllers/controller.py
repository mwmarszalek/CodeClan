from app import app
from flask import render_template
from models.todo_list import tasks

@app.route('/')
def index():
    return "Hello world"

@app.route('/tasks')
def show_tasks():
    return render_template('index.html',title="Home",tasks=tasks)
    
    
@app.route('/tasks/<int:task_id>')
def show_task(task_id):
    task = tasks[task_id]
    return render_template('task.html',task=task)

