import java.util.Scanner;

public class L1001 {
    public static void main(String[] args) {
        // 建立輸入物件
        Scanner in = new Scanner(System.in);
        
        System.out.println("請輸入第一個整數：");
        // 讀取第一個整數
        int a = in.nextInt();
        
        System.out.println("請輸入第二個整數：");
        // 讀取第二個整數
        int b = in.nextInt();
        
        System.out.println("兩個整數的和為：");
        System.out.println((a+b));
    }
}