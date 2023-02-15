package rooms;

public enum TreasureType {

    GOLD(200),
    GEMS(400),
    JEWELS(600);

    private int value;

    TreasureType(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
