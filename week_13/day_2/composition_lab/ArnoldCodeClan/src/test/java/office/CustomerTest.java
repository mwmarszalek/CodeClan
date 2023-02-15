package office;

import carSpec.Engine;
import carSpec.Tyres;
import carSpec.enums.GasType;
import carSpec.enums.HybridType;
import carSpec.enums.TyreType;
import cars.Car;
import cars.ElectricCar;
import cars.HybridCar;
import cars.NormalCar;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static org.junit.Assert.assertEquals;

public class CustomerTest {

    private NormalCar normalCar;
    private ElectricCar electricCar;
    private HybridCar hybridCar;
    private Engine engine;
    private Tyres tyres;
    private Customer customer;
    private Dealership dealership;
    private ArrayList<Car> carz;

    @Before
    public void setup() {
        engine = new Engine(2,230, GasType.PETROL);
        tyres = new Tyres(4.6,"Dunlop", TyreType.ALLSEASON);
        electricCar = new ElectricCar("Nissan","Leaf","AB123",engine,tyres,500,400);
        hybridCar = new HybridCar("Hyundai","Kona","CD246",engine,tyres, HybridType.PLUGIN);
        normalCar = new NormalCar("Mazda","Six","SK17OJS",engine,tyres,GasType.DIESEL);
        customer = new Customer(1000000);
    }



    @Test
    public void customerCanBuyCar() {
        customer.buyCar(hybridCar);
        customer.buyCar(electricCar);
        customer.buyCar(normalCar);
        assertEquals(3,customer.getCars().size());

    }


}
