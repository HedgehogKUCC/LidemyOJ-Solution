import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        List<Integer> lines = new ArrayList<>();
        String line;
        List<String> results = new ArrayList<>();

        while ((line = br.readLine()) != null) {
            if (line.equals("0")) {
                break;
            }
            lines.add(Integer.parseInt(line));
        }
       
        for (Integer inputNumber : lines) {
            List<Integer> factor = new ArrayList<>();
            List<Integer> sumFactor = new ArrayList<>();
            
            for (int j = 1; j < inputNumber; j++) {
                if (inputNumber % j == 0) {
                    factor.add(j);
                }
            }
            
            Integer amicableNumber = 0;
            for (int k = 0; k < factor.size(); k++) {
                amicableNumber += factor.get(k);
            }
            
            if (amicableNumber > 1) {
                for (int m = 1; m < amicableNumber; m++) {
                    if (amicableNumber % m == 0) {
                        sumFactor.add(m);
                    }
                }
                
                int sum = 0;
                for (int n = 0; n < sumFactor.size(); n++) {
                    sum += sumFactor.get(n);
                }
                
                if (sum == inputNumber) {
                    results.add(amicableNumber.toString());
                } else {
                    results.add("QQ");
                }
            } else {
                results.add("QQ");
            }
        }
        
        for (String result : results) {
            System.out.println(result);
        }
    }
}
