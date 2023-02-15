package carSpec;

import carSpec.enums.GasType;

public class Engine {

    private int engineSize;
    private int bhp;
    private GasType gastype;

    public Engine(int engineSize, int bhp, GasType gastype) {
        this.engineSize = engineSize;
        this.bhp = bhp;
        this.gastype = gastype;
    }

    public int getEngineSize() {
        return engineSize;
    }

    public int getBhp() {
        return bhp;
    }

    public GasType getGastype() {
        return gastype;
    }
}
