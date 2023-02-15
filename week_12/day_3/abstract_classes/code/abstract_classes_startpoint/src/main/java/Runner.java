import java.util.ArrayList;

public class Runner {

    public static void printHowManyWheels(Vehicle vehicle) {
        System.out.println("Vehicle has " + vehicle.getNumberOfWheels() + " wheels");
    }

    public static void main(String[] args) {

        Car focus = new Car("Focus",4);
        Car reliant = new Car("Robin",2);

        Motorbike harley = new Motorbike("ABC");
        Motorbike ninja = new Motorbike("Ninja");

        printHowManyWheels(focus);
        printHowManyWheels(ninja);

        ArrayList<Vehicle> vehicles = new ArrayList<>();
        vehicles.add(focus);
        vehicles.add(reliant);
        vehicles.add(harley);
        vehicles.add(ninja);

        Vehicle aVehicle = vehicles.get(0);
        if (aVehicle instanceof Car) {
            Car castedCar = (Car) aVehicle;
            System.out.println(castedCar.openDoors());
        } else {

        }

    }

}
