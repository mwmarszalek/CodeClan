from models.book import Book

book1 = Book("Power of Now","Eckhart Tolle","lifestyle",True)
book2 = Book("The Colour of Magic","Terry Pratchett","fantasy",False)
book3 = Book("George R.R Martin","A Dance with Dragons","fantasy",False)


list_of_books = [book1,book2,book3]


def get_book(book_index):
    return list_of_books[book_index]

def add_book(new_book):
    list_of_books.append(new_book)
    
def remove_book(book_to_remove):

    list_of_books.remove(book_to_remove)