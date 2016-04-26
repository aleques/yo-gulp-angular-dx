package teste;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.Locale;

public class MainTeste {

	public static void main(String[] args) {
		
		String number = "3435436524234343.534.645,5";
		testBigDecimal(number);
		System.out.println(isPositiveNumeric(number));
	}

	private static void testBigDecimal(String sNumber) {
		try {
			
			DecimalFormat df = (DecimalFormat) DecimalFormat.getInstance(new Locale("pt", "BR"));
			df.setParseBigDecimal(true);
			BigDecimal number = (BigDecimal) df.parse(sNumber);
			
			System.out.println(number.toString());
			System.out.println("casas decimais - " + number.scale());
			System.out.println("casas antes da virgula - " + (number.precision() - number.scale()));
			System.out.println("total numeros - " + number.precision());
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static boolean isPositiveNumeric(String s) {  
	    return s.matches("^(([\\d]{1,3})+([\\.]?\\d{3})*(\\,[\\d]+)?)?$");  
	} 
	
}
