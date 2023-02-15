package cars;

import carSpec.Engine;
import carSpec.Tyres;

public abstract class Car {

    private String make;
    private String model;
    private String reg;
    private Engine engine;
    private Tyres tyres;

    public Car(String make, String model, String reg, Engine engine, Tyres tyres) {
        this.make = make;
        this.model = model;
        this.reg = reg;
        this.engine = engine;
        this.tyres = tyres;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public String getReg() {
        return reg;
    }

    public Engine getEngine() {
        return engine;
    }

    public Tyres getTyres() {
        return tyres;
    }
}
