import java.util.ArrayList;
import java.util.HashMap;

public class Library {

    private ArrayList<Book> books;
    private int capacity;

    private HashMap<String,Integer> booksByGenre;


    public Library(int capacity) {
        this.books = new ArrayList<>();
        this.capacity = capacity;
        this.booksByGenre = new HashMap<>();
    }

    public int countBooks() {
        return this.books.size();
    }

    public void addBooks(Book book) {
        if (this.countBooks() == this.capacity) {
        } else {
            this.books.add(book);
        }
    }

    public void removeBook(Book book) {
        this.books.remove(book);
    }





}
