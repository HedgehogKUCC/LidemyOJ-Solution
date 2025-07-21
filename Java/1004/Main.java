import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<String> lines = new ArrayList<>();
        String line;
        List<String> results = new ArrayList<>();

        while ((line = br.readLine()) != null) {
            lines.add(line);
        }

        int mRowCompetition = Integer.parseInt(lines.get(0));
        int i = 1;
        
        while (i <= mRowCompetition) {
            String competition = lines.get(i);
            
            String[] parts = competition.split(" ");
            BigInteger A = new BigInteger(parts[0]);
            BigInteger B = new BigInteger(parts[1]);
            int K = Integer.parseInt(parts[2]);
            
            int compareResult = A.compareTo(B);
            
            if (compareResult == 0) {
                results.add("DRAW");
            } else if ((compareResult > 0 && K == 1) || (compareResult < 0 && K == -1)) {
                results.add("A");
            } else {
                results.add("B");
            }
            
            i++;
        }
        
        for (String result : results) {
            System.out.println(result);
        }
    }
}
