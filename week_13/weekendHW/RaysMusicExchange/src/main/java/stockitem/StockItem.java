package stockitem;

import behaviours.ISell;

public class StockItem implements ISell {

    private String description;
    private int priceSoldFor;
    private int priceBoughtFor;

    public StockItem(String description, int priceSoldFor, int priceBoughtFor) {
        this.description = description;
        this.priceSoldFor = priceSoldFor;
        this.priceBoughtFor = priceBoughtFor;
    }

    @Override
    public double calculateMarkup() {
         return (this.priceSoldFor - this.priceBoughtFor) / this.priceBoughtFor ;
    }

    public int getPriceSoldFor() {
        return priceSoldFor;
    }

    public int getPriceBoughtFor() {
        return priceBoughtFor;
    }
}
