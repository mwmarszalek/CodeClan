package instruments;

import behaviours.InstrumentType;


public class Piano extends Instrument {


    private int noOfPedals;

    public Piano(int priceSoldFor, int priceBoughtFor, String description, String material, String colour, InstrumentType instrumentType, int noOfPedals) {
        super(priceSoldFor, priceBoughtFor, description, material, colour, instrumentType);
        this.noOfPedals = noOfPedals;
    }


}
