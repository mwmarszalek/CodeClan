public class Bicycle implements IMove, IStart, IStop {
    private int distanceTravelled;
    private String bikeStarting;

    public Bicycle(int distanceTravelled, String bikeStarting) {
        this.distanceTravelled = 0;
        this.bikeStarting = bikeStarting;
    }

    public int getDistanceTravelled() {
        return distanceTravelled;
    }

    public void move(int distance) {
        this.distanceTravelled += distance;
    }

    public String start() {
       return "go";
    }


    public String stop() {
        return "Gently apply pressure to the brakes";
    }
}
