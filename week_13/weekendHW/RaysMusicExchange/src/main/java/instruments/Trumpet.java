package instruments;

import behaviours.InstrumentType;


public class Trumpet extends Instrument {


    private int noOfValves;

    public Trumpet(int priceSoldFor, int priceBoughtFor, String description, String material, String colour, InstrumentType instrumentType, int noOfValves) {
        super(priceSoldFor, priceBoughtFor, description, material, colour, instrumentType);
        this.noOfValves = noOfValves;
    }


}
