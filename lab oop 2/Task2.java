import java.util.Scanner;

public class Task2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int min = 101;
        int max = 0;

        for (int i = 0; i < n; i++) {
            int h = sc.nextInt();

            if (h < min) min = h;
            if (h > max) max = h;
        }

        System.out.println(max - min);
    }
}