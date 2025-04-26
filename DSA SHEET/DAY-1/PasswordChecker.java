public class PasswordChecker {
    public static String checker(String password) {
        int n = password.length();
        if(n < 8) {
            return "Weak";
        }
        boolean U_flag = false, L_flag = false, N_flag = false,  S_flag = false;
        for(int i=0; i < n; i++) {
            char ch = password.charAt(i);
            int ascii = (int)ch;
            if(ascii >= 65 && ascii <= 90) {
                U_flag = true;
            }   else if(ascii >= 97 && ascii <= 122) {
                L_flag = true;
            }   else if(ascii >= 48 && ascii <= 57) {
                N_flag = true;
            }   else if(ch == '!' || ch == '@' || ch == '#' || ch == '$' || ch == '%' 
                        || ch == '^' || ch == '&' || ch == '*') {
                    S_flag = true;
            }   else {
                return "Weak";
            }
            if(U_flag && L_flag && N_flag && S_flag) {
                return "Strong";
            }
        }
        return "Weak";
    }
    public static String checker2(String password) {
        int n = password.length();
        if(n < 8) {
            return "Weak";
        }
        boolean U_flag = false, L_flag = false, N_flag = false,  S_flag = false;
        for(int i=0; i < n; i++) {
            char ch = password.charAt(i);
            if(Character.isUpperCase(ch)) {
                U_flag = true;
            }   else if(Character.isLowerCase(ch)) {
                L_flag = true;
            }   else if(Character.isDigit(ch)) {
                N_flag = true;
            }   else if(ch == '!' || ch == '@' || ch == '#' || ch == '$' || ch == '%' 
                        || ch == '^' || ch == '&' || ch == '*') { // store an set then check.
                    S_flag = true;
            }   else {
                return "Weak";
            }
            if(U_flag && L_flag && N_flag && S_flag) {
                return "Strong";
            }
        }
        return "Weak";
    }
    public static void main(String[] args) {
        System.out.println(checker2("Password123!"));
    }
}