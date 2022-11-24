from flask import render_template

from app import app #this is to import flask


@app.route('/')
def index():
    return render_template('index.html')

