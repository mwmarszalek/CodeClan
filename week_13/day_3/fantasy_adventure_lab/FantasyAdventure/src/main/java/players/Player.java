package players;

import behaviours.IFight;

public abstract class Player implements IFight {

    private String name;
    private int healthBar;
    private int inventory;


    public Player(String name, int healthBar) {
        this.name = name;
        this.healthBar = healthBar;
        this.inventory = 0;
    }

    public String getName() {
        return name;
    }

    public int getHealthBar() {
        return healthBar;
    }

    public void setHealthBar(int healthBar) {
        this.healthBar = healthBar;
    }

    public int getInventory() {
        return inventory;
    }

    public void setInventory(int inventory) {
        this.inventory = inventory;
    }
}
