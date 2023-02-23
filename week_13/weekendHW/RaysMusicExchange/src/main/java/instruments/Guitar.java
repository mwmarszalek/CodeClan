package instruments;

import behaviours.InstrumentType;


public class Guitar extends Instrument {


    private int noOfStrings;
    private boolean accoustic;
    public Guitar(int priceSoldFor, int priceBoughtFor, String description, String material, String colour, InstrumentType instrumentType,int noOfStrings,boolean accoustic) {
        super(priceSoldFor, priceBoughtFor, description, material, colour, instrumentType);
        this.noOfStrings = noOfStrings;
        this.accoustic = accoustic;
    }


}
