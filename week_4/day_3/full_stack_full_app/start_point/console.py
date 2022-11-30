from models.task import Task
from models.user import User

from repositories import task_repository
from repositories import user_repository

task_repository.delete_all()
user_repository.delete_all()

user1 = User("Jack", "Jarvis")
user_repository.save(user1)
user2 = User("Victor", "McDade")
user_repository.save(user2)

user_repository.select_all()

task_1 = Task("Plant seeds", user1, 30)
task_repository.save(task_1)

task_2 = Task("Go for a run", user1, 30, True)
task_repository.save(task_2)

# Uncomment the line below to inspect the variables above in the debugger!
# breakpoint()
