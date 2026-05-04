import java.util.*;

public class Lab9 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int oddSum = 0;
        int evenSum = 0;
        for (int i = 0; i < s.length(); i++) {
            int digit = s.charAt(i) - '0';
            if ((i + 1) % 2 == 0)
                evenSum += digit;
            else
                oddSum += digit;
        }
        System.out.println(oddSum * evenSum);
    }
}   