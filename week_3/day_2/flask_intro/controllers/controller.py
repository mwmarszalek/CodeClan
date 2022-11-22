from app import app

@app.route('/')
def index():
    return 'Hello someone'

@app.route('/<name>/<colour>')
def greet(name,colour):
    upper_case_name = name.upper()
    return f'Hello {name} your dsadas colour is {colour}'
    
