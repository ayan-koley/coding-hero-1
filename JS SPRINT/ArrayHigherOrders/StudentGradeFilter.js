function solve(input) {
    const result = [];
    for(const val of input) {
        if(val.grade >= 75) {
            result.push(val.name);
        }
    }
    return result;
  }
  
  // Please don't remove the code below
  const readline = require('readline');
  
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  
  rl.on('line', (line) => {
    const input = JSON.parse(line);
    const result = solve(input);
    process.stdout.write(JSON.stringify(result));
  });
  