public class Main {

    public static void main(String[] args) {


        Planet planet = new Planet("Mars", 908973);
        String planetName = planet.getName();
        int planetSize = planet.getSize();
        String exploded = planet.explode();


        System.out.println(planetName + " is " + planetSize + " km wide");
        System.out.println(exploded);

    }

}
