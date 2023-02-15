package enemies;

import players.Player;

public class Enemy  {


    private int enemyDamage;
    private String name;
    private int healthBar;

    public Enemy(String name, int healthBar, int enemyDamage) {
        this.name = name;
        this. healthBar = healthBar;
        this.enemyDamage = enemyDamage;
    }

    public int getEnemyDamage() {
        return enemyDamage;
    }

    public String getName() {
        return name;
    }

    public int getHealthBar() {
        return healthBar;
    }

    public void setEnemyDamage(int enemyDamage) {
        this.enemyDamage = enemyDamage;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setHealthBar(int healthBar) {
        this.healthBar = healthBar;
    }
}
