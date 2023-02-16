import java.util.stream.Stream;

public class Streams2 {

    public static void main(String[] args) {
//        Stream.of(1,2,3,4,5,6,7,8,9)
//                .filter(num -> num % 2 == 0)
//                .forEach(System.out::println);
//
//
//        Stream.of(2,9,1,4,5,6,7)
//                .sorted()
//                .forEach(System.out::println);
//
//
//        Stream.of("Apple","Pear","Banana")
//                .limit(2)
//                .forEach(System.out::println);

//        double avg = Stream.of(223,1312,3,423,312)
//                .mapToInt(n -> n)
//                .average()
//                .getAsDouble();
//

        Stream.of("Apple","banana")
                .peek(val -> System.out.println("Value was " + val))
                .map(String::toUpperCase)
                .peek(val -> System.out.println("Value now is " + val))
                .forEach(n -> System.out.println("done"));


    }


}
