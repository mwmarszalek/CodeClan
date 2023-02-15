public class Person {

    public String name;
    public String cohort;

    public Person (String name, String cohort) {
        this.name = name;
        this.cohort = cohort;
    }

    public String getName() {
        return this.name;
    }

    public String getCohort() {
        return this.cohort;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCohort(String cohort) {
        this.cohort = cohort;
    }


    public String talk(String sentence) {
        return "I love "+sentence;
    }
}
