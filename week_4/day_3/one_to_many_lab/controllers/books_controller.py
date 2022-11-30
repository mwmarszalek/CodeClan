from flask import render_template,Blueprint,request,redirect
from repositories import author_repository, book_repository
from models.book import Book

book_blueprint = Blueprint("books",__name__)


#INDEX MAIN PAGE
#GET /tasks
@book_blueprint.route('/library')
def books():
    all_books_list = book_repository.select_all()
    
    return render_template('library/index.html',all_books_key = all_books_list)

#SHOW SINGLE BOOK

@book_blueprint.route('/library/<book_id>')
def get_book(book_id):
    book = book_repository.select(book_id)
    return render_template('library/show.html',book=book)

#DELETE BOOK
@book_blueprint.route('/library/<book_id>/delete', methods = ['POST'])
def delete_book(book_id):
    book_repository.delete(book_id)
    return redirect('/library')

#SHOW ADD BOOK PAGE (DISPLAY FORM)

@book_blueprint.route('/library/new')
def new_book():
    authors = author_repository.select_all()
    return render_template('library/new.html')

# SAVE ADDED BOOK









