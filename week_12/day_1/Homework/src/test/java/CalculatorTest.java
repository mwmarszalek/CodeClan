import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;


public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setup() {
        calculator= new Calculator();
    }

    @Test
    public void canAdd() {
        assertEquals(12,calculator.add(8,4));
    }

    @Test
    public void canSubs() {
        assertEquals(12,calculator.subs(14,2));
    }

    @Test
    public void canMulti() {
        assertEquals(12,calculator.multi(2,6));
    }

    @Test
    public void canDivide() {
        assertEquals(12,calculator.divide(24,2),0.0);
    }


}
