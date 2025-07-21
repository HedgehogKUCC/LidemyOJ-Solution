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

        while ((line = br.readLine()) != null) {
            lines.add(line);
        }
        
        int nRowStrings = Integer.parseInt(lines.get(0));
        int i = 1;
        String words = "";
        
        while (i <= nRowStrings) {
            words = words + lines.get(i);
            i++;
        }
        
        int mRowNumbers = Integer.parseInt(lines.get(i));
        int lastIndex = i + mRowNumbers;
        List<Integer> indexes = new ArrayList<>();

        i++;
        while (i <= lastIndex) {
            indexes.add(Integer.parseInt(lines.get(i)));
            i++;
        }

        String result = "";
        for (int index : indexes) {
            result = result + words.charAt(index - 1); 
        }

        System.out.println(result);
    }
}
