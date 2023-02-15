import attractions.Attraction;
import attractions.Dodgems;
import org.junit.Before;
import org.junit.Test;
import stalls.CandyflossStall;
import stalls.ParkingSpot;

import java.sql.Array;
import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

public class ThemeParkTest {

    private ThemePark themepark;

    private Dodgems dodgems;
    private Dodgems dodgems1;
    private Dodgems dodgems2;
    private Dodgems dodgems3;
    private CandyflossStall candyfloss1;

    private ArrayList attractions = new ArrayList<>();
    private ArrayList stalls = new ArrayList<>();
    ParkingSpot parkingSpot;


    @Before
    public void setup() {
    dodgems1 = new Dodgems("dodgem1",4);
    dodgems2 = new Dodgems("dodgem2",4);
    dodgems3 = new Dodgems("dodgem3",4);
    candyfloss1 = new CandyflossStall("candy1","john",parkingSpot.A1,5);
    themepark = new ThemePark();
    }

    @Test
    public void parkHasAttractions() {
        themepark.addAttractions(dodgems1);
        themepark.addAttractions(dodgems2);
        themepark.addAttractions(dodgems3);
        assertEquals(3, themepark.getAttractions().size());
    }

    @Test
    public void parkHasStalls() {
        themepark.addStalls(candyfloss1);
        themepark.addStalls(candyfloss1);
        themepark.addStalls(candyfloss1);
        assertEquals(3,themepark.getStalls().size());
    }



}
