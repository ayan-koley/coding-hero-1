function solve(input) {
  let hrs = 0;
  let minute = 0;
  for (const obj of input) {
    const startDate = new Date(obj["in"]);
    const endDate = new Date(obj["out"]);
    hrs += endDate.getHours() - startDate.getHours();
    minute += endDate.getMinutes() - startDate.getMinutes();
  }
  return `${hrs} hours ${minute} minutes`;
}

console.log(
  solve([
    { in: "2025-04-10T09:00:00", out: "2025-04-10T17:25:00" },
    {
      in: "2025-04-10T09:00:00",
      out: "2025-04-10T12:25:00",
    },
  ])
);
