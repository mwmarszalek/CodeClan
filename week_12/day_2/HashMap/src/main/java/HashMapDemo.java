
import java.util.HashMap;


public class HashMapDemo {

    public static void main(String[] args) {

        HashMap<String, Integer> ages = new HashMap<>();

        ages.put("Ash", 100);
        ages.put("Ben", 21);
        ages.put("Steve", 65);
        ages.put("Futbol",2);

        Integer catAge = ages.get("Futbol");
        String output = "Cat's age is " + catAge.toString();
        System.out.println(output);

    }

}
