import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<String> lines = new ArrayList<>();
        String line;
        List<Integer> results = new ArrayList<>();

        while ((line = br.readLine()) != null) {
            if (line.equals("0 0")) break;
            lines.add(line);
        }
        
        for (String s : lines) {
            String[] parts = s.split(" ");
            int a = Integer.parseInt(parts[0]);
            int b = Integer.parseInt(parts[1]);
            
            if (a > b) {
                results.add(a);
            }
            
            if (b > a) {
                results.add(b);
            }
            
            if (a == b) {
                results.add(a);
            }
        }
        
        for (int result : results) {
            System.out.println(result);
        }
    }
}
