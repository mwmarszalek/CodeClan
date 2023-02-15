import java.util.ArrayList;

public class Bear {

    private String name;
    private ArrayList<Salmon> belly;


    public Bear(String name) {
        this.name = name;
        this.belly = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int foodCount() {
        return this.belly.size();
    }

    public void eatFishFromTheRiver(River river) {
        Salmon salmon = river.removeFish();
        this.belly.add(salmon);
    }


    public void shitInTheWoods() {
        this.belly.clear();
    }
}
