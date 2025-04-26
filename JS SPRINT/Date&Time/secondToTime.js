const { signedCookie } = require("cookie-parser");

function solve(input) {
    if(input === 0) {
        return '0 seconds';
    }
    const hrs = Math.floor(input / 3600);
    const mins = Math.floor((input % 3600) / 60);
    const secs = input % 60;
    let result = '';
    if(hrs > 0) {
        result += `${hrs} hour, `;
    }
    if(mins === 0 && secs > 0) {
        result += `0 minute, ${secs} seconds`;
    }   else [
        
    ]
}

console.log(solve(3600));