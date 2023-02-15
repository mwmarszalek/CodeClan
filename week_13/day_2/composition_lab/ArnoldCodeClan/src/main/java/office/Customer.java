package office;

import cars.Car;

import java.util.ArrayList;

public class Customer {

    private int money;
    private ArrayList<Car> carsCollection;

    private Dealership dealership;

    public Customer(int money) {
        carsCollection = new ArrayList<Car>();
        this.money = money;
    }

    public int getMoney() {
        return money;
    }

    public ArrayList<Car> getCars() {
        return carsCollection;
    }

    public void buyCar(Car car) {
            carsCollection.add(car);
        }



}
