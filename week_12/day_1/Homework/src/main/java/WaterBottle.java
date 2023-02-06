public class WaterBottle {

    int volume;

    public WaterBottle() {
        this.volume = 100;
    }

    public int drink() {
        return this.volume - 10;
    }

    public int zeroDrink() {
        return this.volume = 0;
    }

    public int fillDrink() {
        return this.volume = 100;
    }

}
