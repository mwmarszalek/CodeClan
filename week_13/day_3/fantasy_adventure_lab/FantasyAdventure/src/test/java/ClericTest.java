import org.junit.Before;
import org.junit.Test;
import players.Player;
import players.cleric.Cleric;
import players.cleric.HealingType;
import players.magicPeople.*;
import players.warriors.Dwarf;
import players.warriors.Warrior;
import players.warriors.WeaponType;

import static org.junit.Assert.assertEquals;

public class ClericTest {
    private Cleric cleric;
    private Warrior warrior;
    private Player player1;
    private Dwarf dwarf;
    private Wizard wizard;
    private MagicPerson magicPerson1;
    private MagicPerson magicPerson2;


    @Before
    public void setup() {
        cleric = new Cleric("Jim", 100, HealingType.HERBS);
        warrior = new Dwarf("Gimly",100, WeaponType.AXE);
        magicPerson1 = new Wizard("Dumbledore",100, SpellType.LIGHTNING_STRIKE, CreatureType.ARMED_LLAMA);
        magicPerson2 = new Warlock("Saruman",100,SpellType.LIGHTNING_STRIKE,CreatureType.ARMED_LLAMA);

    }

    @Test
    public void clericCanHealWarrior() {
        cleric.heal(warrior);
        assertEquals(120, warrior.getHealthBar());
    }

    @Test
    public void clericCanHealMagic() {
        cleric.heal(magicPerson1);
        assertEquals(170,magicPerson1.getHealthBar());
    }

    @Test
    public void clericCanChangeHeal() {
        cleric.setHealingType(HealingType.POTION);
        assertEquals(HealingType.POTION,cleric.getHealingType());
    }




}
