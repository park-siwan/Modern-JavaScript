function printArguments(a, b, c) {
  for (const arg of arguments) {
    console.log(arg);
  }
  console.log('---------');
}
printArguments('Park', 'Si', 'Wan');
