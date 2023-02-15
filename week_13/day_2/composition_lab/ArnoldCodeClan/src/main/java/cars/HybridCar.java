package cars;

import carSpec.Engine;
import carSpec.Tyres;
import carSpec.enums.HybridType;

public class HybridCar extends Car {

    private HybridType hybridtype;


    public HybridCar(String make, String model, String reg, Engine engine, Tyres tyres, HybridType hybridtype) {
        super(make, model, reg, engine, tyres);
        this.hybridtype = hybridtype;
    }
}
