import org.junit.Before;
import org.junit.Test;
import players.Player;
import players.magicPeople.*;
import players.warriors.Dwarf;
import players.warriors.Warrior;
import players.warriors.WeaponType;

import static org.junit.Assert.assertEquals;

public class MagicPersonTest {

    private Warrior warrior;
    private Player player1;
    private Dwarf dwarf;
    private Wizard wizard;
    private MagicPerson magicPerson1;
    private MagicPerson magicPerson2;


    @Before
    public void setup() {
        warrior = new Dwarf("Gimly",100, WeaponType.AXE);
        magicPerson1 = new Wizard("Dumbledore",100, SpellType.LIGHTNING_STRIKE, CreatureType.ARMED_LLAMA);
        magicPerson2 = new Warlock("Saruman",100,SpellType.LIGHTNING_STRIKE,CreatureType.ARMED_LLAMA);
    }

    @Test
    public void magicCanFightMagic() {
        magicPerson1.fight(magicPerson2);
        assertEquals(110,magicPerson2.getHealthBar());
    }

    @Test
    public void magicCanFightWarrior() {
        magicPerson1.fight(warrior);
        assertEquals(60,warrior.getHealthBar());
    }

    @Test
    public void magicCanChangeSpell() {
        magicPerson1.setSpellType(SpellType.ACID_RAIN);
        assertEquals(SpellType.ACID_RAIN,magicPerson1.getSpellType());
    }




}
