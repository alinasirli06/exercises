import java.util.Scanner;

public class Task1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int min = sc.nextInt();

        for (int i = 1; i < n; i++) {
            int num = sc.nextInt();
            if (num < min) {
                min = num;
            }
        }

        System.out.println(min);
    }
}x