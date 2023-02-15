package office;

import cars.Car;

import cars.ElectricCar;
import cars.HybridCar;
import cars.NormalCar;

import java.util.ArrayList;

public class Dealership {

    private int till;
    private ArrayList<Car> carStock;
    private Garage garage;


    public Dealership(int till) {
        this.till = till;
        this.carStock = new ArrayList<Car>();

    }

    public int getTill() {
        return till;
    }

    public ArrayList<Car> getCarStock() {
        return carStock;
    }

    public void removeCar(Car car) {
        carStock.remove(car);
    }

    public void buyCar(Car car) {
        garage.sellCar(car);
        carStock.add(car);
    }

}
