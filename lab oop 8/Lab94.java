import java.util.*;

public class Lab94 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int mainSum = 0;
        int secondarySum = 0;
        int[][] a = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                a[i][j] = sc.nextInt();
                if (i == j)
                    mainSum += a[i][j];
                if (i + j == n - 1)
                    secondarySum += a[i][j];
            }
        }
        System.out.println(mainSum + " " + secondarySum);
    }
}