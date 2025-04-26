class PasswordChecker {
    checker(password) {
        const n = password.length;
        if(n < 8) {
            return "Weak";
        }
        let U_flag = false, L_flag = false, N_flag = false,  S_flag = false;
        for(let ch of password) {
            if(/[A-Z]/.test(ch)) {
                U_flag = true;
            }  else if(/[a-z]/.test(ch)) {
                L_flag = true;
            }   else if(/[0-9]/.test(ch)) {
                N_flag = true;
            }   else if(/[!@#$%^&*]/.test(ch)) {
                    S_flag = true;
            }
            if(U_flag && L_flag && N_flag && S_flag) {
                return "Strong";
            }
        }
        return "Weak";
    }   
}

let password = new PasswordChecker();
console.log(password.checker("Password123"));