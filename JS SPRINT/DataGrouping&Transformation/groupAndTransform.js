function solve(input) { 
   const map = new Map();
   for(let val of input) {
    const {userId, amount, timestamp} = val;
    if(map.has(userId)) {
        let obj = map.get(userId);
        const sum = obj.amount + amount;
        const time = obj.timestamp < timestamp ? obj.timestamp : timestamp;
        obj["timestamp"] =  time;
        obj["amount"] = sum;
        map.set(userId, obj);
    }   else {
        map.set(userId, {
            userId,
            amount,
            timestamp
        })
    }
   }
   const result = Array.from(map.entries()).sort((a, b) => a[0] - b[0]).map(([userId, data]) => ({
    userId,
    totalAmount: data.amount,
    firstTransaction: data.timestamp
   }));

   return result;
}


solve([{"userId":1,"amount":100,"timestamp":"2025-04-12T09:00:00"}, {"userId":2,"amount":50,"timestamp":"2025-04-12T10:00:00"},
    {"userId":1,"amount":200,"timestamp":"2025-04-12T08:30:00"}])