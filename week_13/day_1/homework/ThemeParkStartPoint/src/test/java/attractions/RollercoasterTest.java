package attractions;

import org.junit.Before;
import org.junit.Test;
import people.Visitor;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class RollercoasterTest {

    RollerCoaster rollerCoaster;
    Visitor visitor;

    @Before
    public void setUp() {
        rollerCoaster = new RollerCoaster("Blue Ridge", 10);
    }

    @Test
    public void hasName() {
        assertEquals("Blue Ridge", rollerCoaster.getName());
    }

    @Test
    public void hasRating() {
        assertEquals(10, rollerCoaster.getRating());
    }

    @Test
    public void hasVisitCount() {
        assertEquals(0, rollerCoaster.getVisitCount());
    }

    @Test
    public void visitorOver200cmPayDouble() {
        visitor = new Visitor(23,210,24.50);
        assertEquals(16.80,rollerCoaster.priceFor(visitor),0.00);
    }

    @Test
    public void visitorOver12Over145IsOkToGo() {
        visitor = new Visitor(13,146,126.75);
        assertTrue(rollerCoaster.isAllowedTo(visitor));
    }
}
