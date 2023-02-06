import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;


public class BearTest {

    private Bear bear;

   @Before
   public void setup() {
       bear = new Bear("Baloo",25,95.62,'f');
   }

    @Test
    public void bearHasAName() {
        assertEquals("Baloo",bear.getName());
    }

    @Test
    public void bearHasAnAge() {
        assertEquals(25,bear.getAge());
    }

    @Test
    public void bearHasAWeight() {
        assertEquals(95.62,bear.getWeight(), 0.0);
    }


    @Test
    public void bearIsReadyToHibernateIfGreaterThan80() {
       assertEquals(true, bear.readyToHibernate());
    }


    @Test
    public void bearIsNotReadyToHibernateIfLessThan88() {
       Bear lightBear = new Bear("Baloo",25,70.00,'f');
       assertEquals(false,lightBear.readyToHibernate());
    }

    @Test
    public void bearHasASex() {
       assertEquals('f',bear.getSex());
    }
}
