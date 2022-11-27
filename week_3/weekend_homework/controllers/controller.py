from flask import render_template,request,redirect
from app import app
from models.book import Book
from models.book_list import list_of_books, get_book, add_book, remove_book



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/books')
def books():
    return render_template('list_of_books.html',list_of_books=list_of_books)

@app.route('/books/<int:book_index>')
def book(book_index):
    my_book = get_book(book_index)
    return render_template('single_book.html',book=my_book)

@app.route('/books/new')
def new_book():
    return render_template('new_book.html')

@app.route('/books', methods=['POST'])
def save_book():
    form_data = request.form
    
    book_title = form_data['book_title']
    book_author = form_data['book_author']
    book_genre= form_data['book_genre']
    book_checked_out = 'checked_out' in form_data
    new_book = Book(book_title,book_author,book_genre,book_checked_out)
    add_book(new_book)
    return render_template('list_of_books.html',list_of_books=list_of_books)

@app.route('/books/delete', methods=['POST'])
def delete_book():
    book_index = int(request.form["index"])
    book_to_remove = list_of_books[book_index]
    remove_book(book_to_remove)
    
    return redirect('/books')
    

    

    
    




    