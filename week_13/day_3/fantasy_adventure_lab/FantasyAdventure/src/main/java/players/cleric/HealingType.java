package players.cleric;

public enum HealingType {

    POTION(40),
    HERBS(20);

    private int healPoints;

    HealingType(int healPoints) {
        this.healPoints = healPoints;
    }

    public int getHealPoints() {
        return healPoints;
    }
}
