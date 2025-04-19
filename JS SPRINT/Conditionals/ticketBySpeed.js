function solve({ speed, isBirthday }) {
	const top_speed = speed - (isBirthday === true ? 5 : 0);
    if(top_speed <= 60) return "No Ticket";
    else if(top_speed > 60 && top_speed <= 80) return "Small Ticket";
    return "Big Ticket";
}

console.log(solve({"speed": 65, "isBirthday": true}));