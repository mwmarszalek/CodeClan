public class Printer {

    int sheetsLeft;
    int tonerVolume;

    public Printer(int sheetsLeft, int tonerVolume) {
        this.sheetsLeft = sheetsLeft;
        this.tonerVolume = tonerVolume;
    }

    public int print(int pages,int copies) {
        if (this.sheetsLeft >= pages * copies) {
            this.sheetsLeft -= (pages * copies);
            this.tonerVolume -= pages;
            return this.sheetsLeft;
        } else {
                return this.sheetsLeft;
            }
    }


}
