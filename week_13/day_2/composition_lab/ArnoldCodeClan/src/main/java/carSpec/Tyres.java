package carSpec;

import carSpec.enums.TyreType;

public class Tyres {

    private double treadDepth;
    private String tyreBrand;
    private TyreType tyretype;

    public Tyres(double treadDepth,String tyreBrand, TyreType tyretype) {
        this.treadDepth = treadDepth;
        this.tyreBrand = tyreBrand;
        this.tyretype = tyretype;
    }

    public double getTreadDepth() {
        return treadDepth;
    }

    public String getTyreBrand() {
        return tyreBrand;
    }

    public TyreType getTyretype() {
        return tyretype;
    }
}
