package office;

import cars.Car;

import java.util.ArrayList;

public class Garage {

    private ArrayList<Car> carStock;

    public Garage() {
        this.carStock = new ArrayList<Car>();
    }



    public ArrayList<Car> getCarStock() {
        return carStock;
    }


    public void addCar(Car car) {
        carStock.add(car);
    }
    public void sellCar(Car car) {
        carStock.remove(car);
    }


}
