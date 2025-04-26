import java.util.*;
import java.util.regex.*;;
public class PlaylistManager {
    public static List<String> playlistManager(List<String> actions) {
        List<String> ans = new ArrayList<>();
        Pattern pattern = Pattern.compile("addSong\\('([^']*)'\\)");

        for(String val : actions) {
            if(val.startsWith("addSong")) {
                Matcher matcher = pattern.matcher(val);
                if(matcher.find()) {
                    ans.add(("\"" + matcher.group(1) + "\""));
                }
                
            }   else if(!ans.isEmpty()) {
                ans.remove(ans.size() - 1);
            }
        }
        return ans;
    }
    public static void main(String[] args) {

    }
}
