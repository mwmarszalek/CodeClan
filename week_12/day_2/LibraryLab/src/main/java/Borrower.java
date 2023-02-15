import java.util.ArrayList;

public class Borrower {

    private ArrayList<Book> booksCollection;

    public Borrower() {
        this.booksCollection = new ArrayList<>();
    }


    public void borrowBookFromLibrary(Library library, Book book) {
        library.removeBook(book);
        this.booksCollection.add(book);
    }

    public int ownedBooksCount() {
        return this.booksCollection.size();
    }
}
