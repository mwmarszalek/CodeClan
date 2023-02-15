import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class LibraryTest {

    private Library library;

    private Book book;

    @Before
    public void before() {
        library = new Library(5);
        book = new Book("Song of Ice and Fire","GRR Martin","Fantasy");
    }

    @Test
    public void canCountBooks() {
        assertEquals(0,library.countBooks());
    }

    @Test
    public void canAddBook() {
        library.addBooks(book);
        assertEquals(1,library.countBooks());
    }

    @Test
    public void libraryIsFull() {
        library.addBooks(book);
        library.addBooks(book);
        library.addBooks(book);
        library.addBooks(book);
        library.addBooks(book);
        library.addBooks(book);

        assertEquals(5,library.countBooks());
    }

    @Test
    public void canRemoveBook() {
        library.addBooks(book);
        library.removeBook(book);
        assertEquals(0,library.countBooks());
    }

}
