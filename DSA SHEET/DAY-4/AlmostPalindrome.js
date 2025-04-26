function canBePalindrome(s) {
    // your code here
    return recursion(s, 0, s.length-1, 0);
}
function recursion(s, p1, p2, counter) {
    if(counter > 1) return false;
    while(p1 < p2) {
        if(s.charAt(p1) !== s.charAt(p2)) {
            return recursion(s, p1+1, p2, counter+1) || recursion(s, p1, p2-1, counter+1);
        }
        p1++;
        p2--;
    }
    return true;
}