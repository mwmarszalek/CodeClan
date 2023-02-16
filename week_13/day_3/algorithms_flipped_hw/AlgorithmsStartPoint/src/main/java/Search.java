import java.util.ArrayList;

public class Search {

    public Boolean linearSearch(ArrayList<Integer> array, int search_number) {
        for (int number : array)
            if (number == search_number){
                return true;
            }
        return false;
    }
}