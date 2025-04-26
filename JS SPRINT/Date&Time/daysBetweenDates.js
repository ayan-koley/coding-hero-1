function solve(start, end) {
	// const { start, end } = input;
    let startDate = new Date(start);
    let endDate = new Date(end);

    const result = new Array();
    while(startDate <= endDate) {
        result.push(startDate.toISOString().slice(0, 10));
        // 1st way
        startDate.setDate(startDate.getDate() + 1);
        // startDate.addDay(1);
    }
    return result;
}
// 2nd way
Date.prototype.addDay = function(day) {
    this.setDate(this.getDate() + day);
}

console.log(solve("2025-04-01", "2025-04-03"));
