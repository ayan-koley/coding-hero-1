function solve(input) {
    const arr = [];
    for(const salary of input) {
        const updated_Salary = updateSalary(salary);
        arr.push(updated_Salary);
    }
    return arr;
}
function updateSalary(salary) {
    return Math.round(salary * 1.1);
} 
  
