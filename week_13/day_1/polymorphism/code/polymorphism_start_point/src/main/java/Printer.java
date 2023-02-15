public class Printer implements IConnect {

    public String print(String data){
        return "printing: " + data;
    }

    @Override
    public String connect(String data) {
        return "Connecting to " + data+ " network";
    }
}