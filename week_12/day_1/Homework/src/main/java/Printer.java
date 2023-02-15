public class Printer {

    int sheetsLeft;
    int tonerVolume;

    public Printer(int sheetsLeft, int tonerVolume) {
        this.sheetsLeft = sheetsLeft;
        this.tonerVolume = tonerVolume;
    }

    public int print(int pages,int copies) {

        int pagesToPrint = pages * copies;

        if (this.sheetsLeft >= pagesToPrint) {
            this.sheetsLeft -= (pagesToPrint);
            this.tonerVolume -= pages;
            return this.sheetsLeft;
        } else {
                return this.sheetsLeft;
            }
    }


}
