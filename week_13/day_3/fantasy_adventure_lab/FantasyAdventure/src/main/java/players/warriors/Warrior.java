package players.warriors;

import behaviours.IChange;
import behaviours.IFight;
import players.Player;
import players.magicPeople.MagicPerson;
import players.magicPeople.SpellType;
import players.magicPeople.Wizard;

public abstract class Warrior extends Player implements IFight, IChange {

    private WeaponType weaponType;
    private Player player;
//    MagicPerson magicPerson;


    public Warrior(String name, int healthBar, WeaponType weaponType) {
        super(name, healthBar);
        this.weaponType = weaponType;
    }

    public WeaponType getWeaponType() {
        return weaponType;
    }

    public void setWeaponType(WeaponType weaponType) {
        this.weaponType = weaponType;
    }

    public void fight(Player player) {
        if (player instanceof MagicPerson) {
            MagicPerson magicPerson = (MagicPerson) player;
            int damage = getWeaponType().getDamage();
            int health = player.getHealthBar();
            int defense = magicPerson.getCreatureType().getDefenseValue();
            int result = (health + defense) - damage;
            player.setHealthBar(result);
        } else {
            int damage = getWeaponType().getDamage();
            int health = player.getHealthBar();
            int result = health - damage;
            player.setHealthBar(result);
        }
    }

    public void changeAttack(WeaponType weaponType) {
        setWeaponType(weaponType);
    }


}
