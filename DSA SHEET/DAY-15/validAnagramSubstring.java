import java.util.*;

public class validAnagramSubstring {
    public static List<Integer> findAnagrams(String t, String p) {
        List<Integer> result = new ArrayList<>();
        if (p.length() < t.length()) return result;

        int[] targetFreq = new int[26];
        int[] windowFreq = new int[26];

        // Fill frequency of t
        for (char c : t.toCharArray()) {
            targetFreq[c - 'a']++;
        }

        int windowSize = t.length();

        for (int i = 0; i < p.length(); i++) {
            // Add current character to window
            windowFreq[p.charAt(i) - 'a']++;

            // Remove character left out of window
            if (i >= windowSize) {
                windowFreq[p.charAt(i - windowSize) - 'a']--;
            }

            // Compare window with target
            if (i >= windowSize - 1 && Arrays.equals(windowFreq, targetFreq)) {
                result.add(i - windowSize + 1);
            }
        }

        return result;
    }

    public static void main(String[] args) {
        System.out.println(findAnagrams("abc", "cbaebabacd")); // Output: [0, 6]
        System.out.println(findAnagrams("abab", "ab"));        // Output: [0, 1, 2]
    
}

}