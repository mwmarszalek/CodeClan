import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CarTest {


    @Test
    public void canConvertCar() {
        // Given we have a car
        Car car = new Car("Tesla",3);
        // When we pass it to converter
        String message = Converter.process(car);
        // Then we should see some converted string
        assertEquals("Car data",message);
    }
}
