import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BorrowerTest {

    private Borrower borrower;

    private Book book;

    private Library library;

    @Before
    public void before() {
        borrower = new Borrower();
        library = new Library(20);
        book = new Book("Song of Ice and Fire","GRR Martin","Fantasy");
    }

    @Test
    public void canBorrowBook() {
        library.addBooks(book);
        borrower.borrowBookFromLibrary(library,book);
        assertEquals(1,borrower.ownedBooksCount());
        assertEquals(0,library.countBooks());
    }


}
