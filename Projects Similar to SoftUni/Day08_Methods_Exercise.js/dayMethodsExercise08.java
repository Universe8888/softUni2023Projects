package Day08_Methods_Exercise;

import java.util.Scanner;

public class P04_Password_Validator {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();

        boolean isValid = true;
        boolean isValidDigits = true;
        int digitsCounter = 0;

        for (int i = 0; i < input.length(); i++) {
            char currentChar = input.charAt(i);


            if (currentChar >= 48 && currentChar <= 57) {
                digitsCounter++;
            }

            if (currentChar < 48 || currentChar > 57 &&
                    currentChar < 65 || currentChar > 90 &&
                    currentChar < 97 || currentChar > 122) {
                isValidDigits = false;
                isValid = false;
            }
        }

        if ( input.length() > 10 || input.length() < 6) {
            isValid = false;
            System.out.println("Password must be between 6 and 10 characters");
        }
        if (!isValidDigits) {
            isValid = false;
            System.out.println("Password must consist only of letters and digits");
        }
        if (digitsCounter < 2) {
            System.out.println("Password must have at least 2 digits");
            isValid = false;
        }
        if (isValid) {
            System.out.println("Password is valid");
        }

    }
}

// Source code from Diyan Dichev