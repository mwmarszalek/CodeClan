import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;


public class PrinterTest {

    private Printer printer;

    @Before
    public void setup() {
        printer = new Printer(86,90);
    }

    @Test
    public void canPrintPages() {
        assertEquals(66,printer.print(10,2));
    }

    @Test
    public void decreasesSheets() {
        printer.print(10,4);
        assertEquals(46,printer.sheetsLeft);
    }

    @Test
    public void decreasesToner() {
        printer.print(15,2);
        assertEquals(75,printer.tonerVolume);
    }
}
