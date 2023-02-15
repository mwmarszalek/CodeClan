package players.magicPeople;

public enum CreatureType {

    UNICORN(25),
    THREE_HEADED_DOG(30),
    ARMED_LLAMA(50),
    FEMININE_SNAKE(40),
    DRAGON(80);

    private int defenseValue;

    CreatureType(int defenseValue) {
        this.defenseValue = defenseValue;
    }

    public int getDefenseValue() {
        return defenseValue;
    }
}
