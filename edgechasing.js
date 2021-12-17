var readline = require("readline");

var rl1 = readline.createInterface(process.stdin, process.stdout);
// const rl2 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let n;
// rl.setPrompt(`Enter no of processes`);
// rl.prompt();
// rl.question((k) => {
//   //   console.log(`Age received by the user: ${ag}`);
//   //   age = ag;
//   n = k;
//   rl.setPrompt(`enter wait for graph`);
//   rl.prompt();
//   let string;
//   rl.on("line", (str) => {
//     string = str;
//     console.log(string);
//   });
// });
let n;
rl1.question("enter processes", (str) => {
  n = str;
  //   console.log(n);
  rl1.question(
    ("enter wfg graph",
    (str) => {
      string = str;
      console.log(string);
      // rl1.close();
    })
  );
});

// console.log(age);
// rl.close();
