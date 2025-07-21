import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int M = Integer.parseInt(br.readLine()); // Total number of groups
        
        List<String> names = new ArrayList<>();
        List<Integer> scores = new ArrayList<>();
        
        for (int i = 1; i <= M; i++) {
            String line = br.readLine();
            String[] parts = line.split(" ");
            
            names.add(parts[0]);
            scores.add(Integer.parseInt(parts[1]));
        }
        
        int max_score = Collections.max(scores);
        
        for (int i = 1; i <= M; i++) {
            if (scores.get(i - 1) == max_score) {
                System.out.println(names.get(i - 1));
            }
        }
    }
}
