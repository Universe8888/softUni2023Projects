

import java.util.*;
import java.util.stream.Collectors;

public class MidExam02 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<Integer> numbers = Arrays.stream(scanner.nextLine().split(" "))
                .map(Integer::parseInt)
                .collect(Collectors.toList());

        double averageNumber = numbers.stream().mapToInt(Integer::intValue).average().orElse(Double.NaN);

        // Филтрирай числата, които са по-големи от средната стойност и ги сортирай в намаляващ ред
        List<Integer> topNumbers = numbers.stream()
                .filter(num -> num > averageNumber)
                .sorted(Comparator.reverseOrder())
                .collect(Collectors.toList());

        // Провери дали има поне едно число, което да отговаря на условието
        if (topNumbers.isEmpty()) {
            System.out.println("No");
        } else {
            // Отпечатай първите пет или по-малко числа
            for (int i = 0; i < Math.min(5, topNumbers.size()); i++) {
                System.out.print(topNumbers.get(i) + " ");
            }
        }
    }
}
