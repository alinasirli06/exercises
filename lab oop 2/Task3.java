import java.util.Scanner;

public class Task3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        if (n < 2) {
            System.out.println("Ooops!");
            return;
        }

        int min = 30001;
        int max = 0;

        for (int i = 0; i < n; i++) {
            int w = sc.nextInt();

            if (w < min) min = w;
            if (w > max) max = w;
        }

        System.out.println(min + " " + max);
    }
}