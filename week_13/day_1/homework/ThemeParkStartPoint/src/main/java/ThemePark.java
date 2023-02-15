import attractions.Attraction;
import behaviours.IReviewed;
import stalls.Stall;

import java.lang.reflect.Array;
import java.util.ArrayList;

public class ThemePark {

   private ArrayList<Attraction> attractions;
   private ArrayList<Stall> stalls;

   private ArrayList<IReviewed> irevieweds;




   public ThemePark() {
       attractions = new ArrayList<Attraction>();
       stalls = new ArrayList<Stall>();
   }

    public ArrayList<Attraction> getAttractions() {
        return attractions;
    }

    public ArrayList<Stall>getStalls() {
       return stalls;
    }

    public void addAttractions(Attraction attraction) {
       attractions.add(attraction);
    }

    public void addStalls(Stall stall) {
       stalls.add(stall);
    }

    public ArrayList<IReviewed> getAllReviewed() {
       ArrayList<IReviewed> irevieweds = new ArrayList<>();
       irevieweds.addAll(attractions);
       irevieweds.addAll(stalls);
       return irevieweds;
    }




}
