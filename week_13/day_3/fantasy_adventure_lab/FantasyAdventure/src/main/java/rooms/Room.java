package rooms;

import enemies.Enemy;
import players.Player;
import players.magicPeople.MagicPerson;
import players.warriors.Warrior;

import java.util.ArrayList;

public class Room {

    private String name;
    private String location;
    private Enemy enemy;
    private TreasureType treasureType;
    Player player;


    public Room(String name, String location, Enemy enemy, TreasureType treasureType) {
        this.name = name;
        this.location = location;
        this.enemy = enemy;
        this.treasureType = treasureType;
    }

    public String getName() {
        return name;
    }

    public TreasureType getTreasureType() {
        return treasureType;
    }

    public String getLocation() {
        return location;
    }


    public void killEnemy(Player player) {

        if (player instanceof Warrior) {
        Warrior warrior = (Warrior) player;
        while (enemy.getHealthBar() > 0) {
            int enemyHealth = enemy.getHealthBar();
            int warriorDamage = ((Warrior) player).getWeaponType().getDamage();
            int result = enemyHealth - warriorDamage;
            enemy.setHealthBar(result);
        }
        int inventory = player.getInventory();
        int treasure = getTreasureType().getValue();
        int outcome = inventory + treasure;
        player.setInventory(outcome);

        } else {
            MagicPerson magicPerson = (MagicPerson) player;
            while (enemy.getHealthBar() > 0) {
                int enemyHealth = enemy.getHealthBar();
                int magicPersonDamage = ((MagicPerson) player).getSpellType().getDamage();
                int result = enemyHealth - magicPersonDamage;
                enemy.setHealthBar(result);
            }
            int inventory = player.getInventory();
            int treasure = getTreasureType().getValue();
            int outcome = inventory + treasure;
            player.setInventory(outcome);
        }

    }


}
