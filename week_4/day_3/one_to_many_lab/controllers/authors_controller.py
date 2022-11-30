from flask import render_template,Blueprint,request,redirect
from repositories import author_repository, book_repository
from models.author import Author

author_blueprint = Blueprint("authors",__name__)