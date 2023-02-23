import behaviours.InstrumentType;
import instruments.Guitar;
import org.junit.Before;
import org.junit.Test;
import otherItems.DrumSticks;

import static org.junit.Assert.assertEquals;

public class ShopTest {

    Guitar guitar;
    DrumSticks drumSticks;
    Shop shop;

    @Before
    public void setup() {
        shop = new Shop(4500);
        drumSticks = new DrumSticks(10000,200,"drumsticks");
        guitar = new Guitar(700,100,"Guitar","Wood","Brown", InstrumentType.STRING,12,true);
    }


    @Test
    public void canGetStockCount() {
        assertEquals(0,shop.getStockCount());
    }

    @Test
    public void canAddItemToStock() {
        shop.addItemToStock(guitar);
        assertEquals(1,shop.getStockCount());
    }

    @Test
    public void canRemoveItemFromStock() {
        shop.addItemToStock(guitar);
        shop.removeItemFromStock(guitar);
        assertEquals(0,shop.getStockCount());
    }

    @Test
    public void canCalculateMarkup() {
        assertEquals(6,guitar.calculateMarkup(),0.000);
    }


    @Test
    public void instrumentCanPlaySound() {
        assertEquals("gui gui gui", guitar.play("gui gui gui"));
    }


    @Test
    public void canAddOtherItemsToStock() {
        shop.addItemToStock(drumSticks);
        assertEquals(1,shop.getStockCount());
    }

    @Test
    public void canBuyItem() {
        shop.buyItem(guitar);
        assertEquals(4400,shop.getTill());
        assertEquals(1,shop.getStockCount());
    }

    @Test
    public void canCalcTotalProfit() {
        shop.addItemToStock(drumSticks);
        shop.addItemToStock(drumSticks);
        assertEquals(9800,shop.returnPotentialProfit(shop.getStock()),0.0);
    }





}
