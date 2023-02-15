import org.junit.Before;
import org.junit.Test;
import players.Player;
import players.cleric.Cleric;
import players.cleric.HealingType;
import players.magicPeople.CreatureType;
import players.magicPeople.MagicPerson;
import players.magicPeople.SpellType;
import players.magicPeople.Wizard;
import players.warriors.Dwarf;
import players.warriors.Warrior;
import players.warriors.WeaponType;

import static org.junit.Assert.assertEquals;

public class WarriorTest {

    private Warrior warrior;
    private Player player1;
    private Player player2;
    private Dwarf dwarf;
    private Wizard wizard;
    private Cleric cleric;
    MagicPerson magicPerson;


    @Before
    public void setup() {
        warrior = new Dwarf("Gimly",100, WeaponType.AXE);
        wizard = new Wizard("Dumbledore",100, SpellType.LIGHTNING_STRIKE, CreatureType.ARMED_LLAMA);
        cleric = new Cleric("Dr Queen",100, HealingType.HERBS);

    }


    @Test
    public void warriorCanFightMagic() {
        warrior.fight(wizard);
        assertEquals(143,wizard.getHealthBar());
    }

    @Test
    public void warriorCanFightCleric() {
        warrior.fight(cleric);
        assertEquals(93,cleric.getHealthBar());
    }

    @Test
    public void warriorCanFightWarrior() {
        warrior.fight(warrior);
        assertEquals(93,warrior.getHealthBar());
    }

    @Test
    public void warriorCanChangeWeapon() {
        warrior.setWeaponType(WeaponType.SWORD);
        assertEquals(WeaponType.SWORD,warrior.getWeaponType());
    }






}
