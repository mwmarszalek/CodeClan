package players.magicPeople;

public enum SpellType {

    FIREBALL(40),
    LIGHTNING_STRIKE(40),
    SMOKE_BOMB(10),
    ACID_RAIN(60);

    private int damage;

    SpellType(int damage) {
        this.damage = damage;
    }

    public int getDamage() {
        return damage;
    }
}
