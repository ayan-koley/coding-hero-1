import java.util.*;
public class MarathonBoard {
    public static List<Map<String, Object>> sortMarathonResults(List<Map<String, Object>> runners) {
        int n = runners.size();
        if(n < 1) return new ArrayList<>();

        runners.sort((r1, r2) -> {
            int timeComparision = Integer.compare((Integer) r1.get("time"), (Integer) r2.get("time")
            );
            if(timeComparision != 0) {
                return timeComparision;
            }

            return ((String) r1.get("name")).compareTo((String) r2.get("name"));
        });
        return runners;
    } 
}
