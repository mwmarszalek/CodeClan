import enemies.Enemy;
import org.junit.Before;
import org.junit.Test;
import players.Player;
import players.magicPeople.*;
import players.warriors.Dwarf;
import players.warriors.Warrior;
import players.warriors.WeaponType;
import rooms.Room;
import rooms.TreasureType;

import static org.junit.Assert.assertEquals;

public class RoomTest {

    private Warrior warrior;
    private Player player1;
    private Dwarf dwarf;
    private Wizard wizard;
    private MagicPerson magicPerson1;
    private MagicPerson magicPerson2;
    private Room room;
    private Enemy enemy;


    @Before
    public void setup() {
        warrior = new Dwarf("Gimly",100, WeaponType.AXE);
        magicPerson1 = new Wizard("Dumbledore",100, SpellType.LIGHTNING_STRIKE, CreatureType.ARMED_LLAMA);
        magicPerson2 = new Warlock("Saruman",100,SpellType.LIGHTNING_STRIKE,CreatureType.ARMED_LLAMA);
        enemy = new Enemy("Joseph",20,25);
        room = new Room("Madhouse","Poland",enemy, TreasureType.GEMS);
    }

    @Test
    public void warriorCanDefeatEnemy() {
        room.killEnemy(warrior);
        assertEquals(-1,enemy.getHealthBar());
        assertEquals(400,warrior.getInventory());
    }

    @Test
    public void magicPersonCanDefeatEnemy() {
        room.killEnemy(magicPerson1);
        assertEquals(-20,enemy.getHealthBar());
        assertEquals(400,magicPerson1.getInventory());
    }


}
