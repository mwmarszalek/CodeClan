from models.task import *



task1 = Task("Buy groceries", "Milk, Cheese, Pizza, Fruit", False)
task2 = Task("Learn Python", "Learn an awesome new programming language", True)
tasks = [task1, task2]


def add_new_task(task):
    tasks.append(task)

