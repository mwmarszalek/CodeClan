from flask import render_template,request
from app import app #this is to import flask
from models.pizza_orders import pizzas,get_order, add_order #this imports pizzas instance to use in def orders as keyword argument and funtions from that 
from models.pizza import Pizza

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/orders')
def orders():
    return render_template('orders.html',pizzas=pizzas)

@app.route('/orders/<int:order_index>')
def order(order_index):
    my_order = get_order(order_index)
    return render_template('order.html',pizza=my_order)

@app.route('/orders/new')
def new_order():
    return render_template('new_order.html')


@app.route('/orders', methods=['POST'])
def save_order():
    form_data = request.form
    pizza_name = form_data['pizza_name']
    pizza_price = form_data['pizza_price']
    gluten_free = 'gluten_free' in form_data
    pizza_size = form_data['pizza_size']
    new_pizza = Pizza(pizza_price,pizza_name,gluten_free,pizza_size)
    add_order(new_pizza)
    return render_template('orders.html', pizzas=pizzas)



    
