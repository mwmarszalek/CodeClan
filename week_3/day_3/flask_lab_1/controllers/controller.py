from app import app
from flask import render_template
from models.order_list import orders 



@app.route('/orders')
def list_orders():
    return render_template('index.html',title="Orders",orders=orders)

@app.route('/orders/<int:order_id>')
def show_orders(order_id):
    order = orders[order_id]
    return render_template('order.html',title="Orders",order=order)
    