package cars;

import carSpec.Engine;
import carSpec.Tyres;
import carSpec.enums.GasType;

public class NormalCar extends Car {

    private GasType gasType;

    public NormalCar(String make, String model, String reg, Engine engine, Tyres tyres, GasType gasType) {
        super(make, model, reg, engine, tyres);
        this.gasType = gasType;

    }
}
