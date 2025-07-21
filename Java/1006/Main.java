import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine()); // Total number of seats
        int M = Integer.parseInt(br.readLine()); // Number of occupied seats

        Set<Integer> occupied = new HashSet<>();
        for (int i = 0; i < M; i++) {
            occupied.add(Integer.parseInt(br.readLine()));
        }

        List<int[]> pairs = new ArrayList<>();

        // Horizontal neighbor: (1,2), (3,4), (5,6), ...
        for (int i = 1; i <= N; i += 2) {
            if (i + 1 <= N) {
                pairs.add(new int[]{i, i + 1});
            }
        }

        // Vertical neighbor: (1,3), (3,5), (5,7), ...
        for (int i = 1; i <= N - 2; i++) {
            if ((i % 2 == 1) && (i + 2 <= N)) {
                pairs.add(new int[]{i, i + 2});
            }
        }

        // Vertical neighbor: (2,4), (4,6), (6,8), ...
        for (int i = 2; i <= N - 2; i += 2) {
            if (i + 2 <= N) {
                pairs.add(new int[]{i, i + 2});
            }
        }

        int count = 0;
        for (int[] pair : pairs) {
            if (!occupied.contains(pair[0]) && !occupied.contains(pair[1])) {
                count++;
            }
        }

        System.out.println(count);
    }
}
