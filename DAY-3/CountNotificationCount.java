import java.util.*;
public class CountNotificationCount {
    public static List<Map<String, Object>> countNotifications(List<String> notifications) {
        Map<String, Integer> map = new HashMap<>();

       // Count occurrences of each notification category
       for (String val : notifications) {
           map.put(val, map.getOrDefault(val, 0) + 1);
       }

       // Convert the map to a list of objects
       List<Map<String, Object>> result = new ArrayList<>();
       for (Map.Entry<String, Integer> entry : map.entrySet()) {
           Map<String, Object> item = new HashMap<>();
           item.put("category", entry.getKey());
           item.put("count", entry.getValue());
           result.add(item);
       }

       // Sort alphabetically by category
       result.sort(Comparator.comparing(o -> (String) o.get("category")));
       return result;
   }
}
