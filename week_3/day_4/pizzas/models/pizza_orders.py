from models.pizza import Pizza

pizza1 = Pizza(10,'Pepperoni',False,'L',)
pizza2 = Pizza(12,'Seafood',True,'M',)
pizza3 = Pizza(8,'Cheese & Tomato',False,'L',)


pizzas = [pizza1,pizza2,pizza3]


def get_order(order_index):
    return pizzas[order_index]

def add_order(order):
    pizzas.append(order)