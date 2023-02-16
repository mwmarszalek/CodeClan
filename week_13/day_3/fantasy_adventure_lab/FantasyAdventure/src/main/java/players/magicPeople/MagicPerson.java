package players.magicPeople;

import behaviours.IChange;
import behaviours.IFight;
import behaviours.IGetDamage;
import players.Player;
import players.warriors.Warrior;

public abstract class MagicPerson extends Player implements IFight, IChange, IGetDamage {


    private SpellType spellType;

    public void setSpellType(SpellType spellType) {
        this.spellType = spellType;
    }

    private CreatureType creatureType;

    public MagicPerson(String name, int healthBar, SpellType spellType, CreatureType creatureType) {
        super(name, healthBar);
        this.spellType = spellType;
        this.creatureType = creatureType;
    }

    public SpellType getSpellType() {
        return spellType;
    }

    public CreatureType getCreatureType() {
        return creatureType;
    }


    public void fight(Player player) {
        if (player instanceof MagicPerson) {
            MagicPerson magicPerson = (MagicPerson) player;
            int damage = getSpellType().getDamage();
            int health = player.getHealthBar();
            int defense = magicPerson.getCreatureType().getDefenseValue();
            int result = (health + defense) - damage;
            player.setHealthBar(result);
        } else {
            int damage = getSpellType().getDamage();
            int health = player.getHealthBar();
            int result = health - damage;
            player.setHealthBar(result);
        }
    }

    public void changeAttack(SpellType spellType) {
        setSpellType(spellType);
    }

    public void getDamageValue() {
        this.spellType.getDamage();
    }

}
