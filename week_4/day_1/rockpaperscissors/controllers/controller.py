from flask import render_template
from app import app


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/player1')
def winning_url():
    pass


@app.route('/player2')
def winning_url():
    pass