package instruments;

import behaviours.IPlay;
import behaviours.ISell;
import behaviours.InstrumentType;
import stockitem.StockItem;


public class Instrument extends StockItem implements IPlay {

    private String material;
    private String colour;
    private InstrumentType instrumentType;


    public Instrument(int priceSoldFor, int priceBoughtFor, String description, String material, String colour, InstrumentType instrumentType) {
        super(description,priceSoldFor, priceBoughtFor);
        this.material = material;
        this.colour = colour;
        this.instrumentType = instrumentType;
    }

    @Override
    public String play(String sound) {
        return sound;
    }
}
