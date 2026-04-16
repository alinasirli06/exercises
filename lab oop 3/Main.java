import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int t = sc.nextInt();

        int sum = 0;
        int count = 0;

        for (int i = 0; i < n; i++) {
            int time = sc.nextInt();

            if (sum + time <= t) {
                sum += time;
                count++;
            } else {
                break;
            }
        }

        System.out.println(count);
    }
}