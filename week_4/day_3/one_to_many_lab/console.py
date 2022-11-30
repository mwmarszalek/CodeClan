from models.author import Author
from models.book import Book

from repositories import author_repository
from repositories import book_repository




author1 = Author("JRR Tolkien")
author_repository.save(author1)
author2 = Author("GRR Martin")
author_repository.save(author2)
author3 = Author("Terry Pratchett")
author_repository.save(author3)

found_author = author_repository.select_all()

book1 = Book("Two Towers",author1,"fantasy")
book_repository.save(book1)
book2 = Book("Windows of Winter",author2,"fantasy")
book_repository.save(book2)
book3 = Book("Colour of Magic",author3,"fantasy")
book_repository.save(book3)



found_book = book_repository.select_all()