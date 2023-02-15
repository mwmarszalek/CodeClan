package cars;

import carSpec.Engine;
import carSpec.Tyres;

public class ElectricCar extends Car {

    private int range;
    private int batteryCapacity;

    public ElectricCar(String make, String model, String reg, Engine engine, Tyres tyres, int range, int batteryCapacity) {
        super(make, model, reg, engine, tyres);
        this.range = range;
        this.batteryCapacity = batteryCapacity;
    }
}