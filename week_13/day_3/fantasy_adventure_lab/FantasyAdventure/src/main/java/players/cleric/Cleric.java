package players.cleric;

import behaviours.IChange;
import players.Player;
import players.magicPeople.MagicPerson;

public class Cleric extends Player {

    private HealingType healingType;


    public Cleric(String name, int healthBar, HealingType healingType) {
        super(name, healthBar);
        this.healingType = healingType;
    }

    public HealingType getHealingType() {
        return healingType;
    }

    public void setHealingType(HealingType healingType) {
        this.healingType = healingType;
    }


    public void changeHeal(HealingType healingType) {
        setHealingType(healingType);
    }

    public void heal(Player player) {
        if (player instanceof MagicPerson) {
            MagicPerson magicPerson = (MagicPerson) player;
            int health = player.getHealthBar() + magicPerson.getCreatureType().getDefenseValue();
            int bonusHealth = this.healingType.getHealPoints();
            int result = health + bonusHealth;
            player.setHealthBar(result);
        } else {
            int health = player.getHealthBar();
            int bonusHealth = this.healingType.getHealPoints();
            int result = health + bonusHealth;
            player.setHealthBar(result);
        }
    }

    @Override
    public void fight() {

    }
}
