function countNotifications(notifications) {
    let map = new Map();
    for(val of notifications) {
        if(map.has(val)) {
            map.set(val, map.get(val) + 1);
        }   else {
            map.set(val, 1);
        }
    }
    let array = [];
    map.forEach((val, key) => {
        array.push({
            "category": key,
            "count": val
        })
    })
    array.sort((a, b) => {
        return a.category.localeCompare(b.category);
    })
    return array;
  }