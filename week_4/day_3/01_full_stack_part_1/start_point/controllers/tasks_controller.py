from flask import render_template,Blueprint,request,redirect
from repositories import task_repository, user_repository
from models.task import Task





task_blueprint =  Blueprint("tasks", __name__)

# INDEX
# GET '/tasks'
@task_blueprint.route('/tasks')
def tasks():
    all_tasks_list = task_repository.select_all()    
    return render_template('tasks/index.html',all_tasks_key=all_tasks_list)

# NEW (display form)
# GET '/tasks/new'

@task_blueprint.route('/tasks/new')
def new_task():
    users = user_repository.select_all()
    return render_template('tasks/new.html',all_users = users)

# CREATE (save)
# POST '/tasks'


@task_blueprint.route('/tasks',methods=['POST'])
def create_task():
    description = request.form['description'] # this needs to match name from 'id' from form in html file
    duration = request.form['duration']
    completed = request.form['completed']
    user_id = request.form['user_id']
    
    user=user_repository.select(user_id)
    task = Task(description,user,duration,completed)
    task_repository.save(task)
    return redirect('/tasks')
    

# SHOW
# GET '/tasks/<id>'

@task_blueprint.route('/tasks/<task_id>')
def get_task(task_id):
    task = task_repository.select(task_id)
    
    
    return render_template('tasks/show.html',task=task) #task=task_repository.select(task_id) is the same


# EDIT (display form)
# GET '/tasks/<id>/edit'

@task_blueprint.route('/tasks/<task_id>/edit')
def edit_task(task_id):
    task = task_repository.select(task_id)
    users = user_repository.select_all()
    
    return render_template('tasks/edit.html',all_users = users,task=task)

# UPDATE
# PUT '/tasks/<id>'
# PUT indicates updating an existing resource

@task_blueprint.route('/tasks/<task_id>',methods=['POST'])
def update_task(task_id):
    description = request.form['description'] # this needs to match name from 'id' from form in html file
    duration = request.form['duration']
    completed = request.form['completed']
    user_id = request.form['user_id']
    
    user=user_repository.select(user_id)
    task = Task(description,user,duration,completed, task_id) # we need to add task_id as the database method requires this.
    task_repository.update(task)
    return redirect('/tasks')

# DELETE
# DELETE '/tasks/<id>/delete'


@task_blueprint.route('/tasks/<task_id>/delete', methods=['POST']) #task_id is function parameter!!
def delete_task(task_id):
    task_repository.delete(task_id)
    
    return redirect('/tasks')
    
    





