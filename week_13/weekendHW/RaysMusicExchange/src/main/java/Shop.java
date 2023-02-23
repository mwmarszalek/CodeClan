import behaviours.ISell;
import stockitem.StockItem;

import java.util.ArrayList;

public class Shop  {

    StockItem stockItem;
    private ArrayList<ISell> stock;
    private int till;

    public Shop(int till) {
        stock = new ArrayList<ISell>();
        this.till = till;
    }

    public ArrayList<ISell> getStock() {
        return stock;
    }

    public int getTill() {
        return till;
    }

    public void setTill(int till) {
        this.till = till;
    }

    public int getStockCount() {
        return this.stock.size();
    }

    public void addItemToStock(StockItem stockItem) {
        this.stock.add(stockItem);
    }

    public void removeItemFromStock(StockItem stockItem) {
        this.stock.remove(stockItem);
    }


    public void buyItem(StockItem stockItem) {
        int newTill = this.till - stockItem.getPriceBoughtFor();
        setTill(newTill);
        this.addItemToStock(stockItem);
    }



    public void sellItem (StockItem stockItem) {
        int newTill = this.till + stockItem.getPriceSoldFor();
        setTill(newTill);
        this.removeItemFromStock(stockItem);
    }



    public double returnPotentialProfit(ArrayList<ISell> stock) {
        double totalProfit = 0;
        for (ISell profit : stock) {
            totalProfit += profit.calculateMarkup() * 100;
        }
        return totalProfit;
    }





}
