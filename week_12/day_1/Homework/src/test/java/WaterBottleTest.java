import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class WaterBottleTest {

    private WaterBottle waterBottle;

    @Before
    public void setup() {
        waterBottle = new WaterBottle();
    }

    @Test
    public void hasVolume() {
        assertEquals(100,waterBottle.volume);
    }

    @Test
    public void canDrink() {
        assertEquals(90,waterBottle.drink());
    }

    @Test
    public void canZero() {
        assertEquals(0,waterBottle.zeroDrink());
    }

    @Test
    public void canFill() {
        waterBottle.drink();
        assertEquals(100,waterBottle.fillDrink());
    }


}
