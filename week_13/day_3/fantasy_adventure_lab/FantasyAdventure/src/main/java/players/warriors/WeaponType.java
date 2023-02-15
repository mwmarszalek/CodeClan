package players.warriors;

public enum WeaponType {

    SWORD(5),
    AXE(7),
    CLUB(1);


    private int damage;

    WeaponType(int damage) {

        this.damage = damage;
    }

    public int getDamage() {
        return damage;
    }
}
