const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n,
  arr,
  graph = [],
  init = 0,
  count = 0,
  msg_list = [];
function Message(init, i, j) {
  this.init = init;
  this.i = i;
  this.j = j;
}
rl.question("enter no of process", (answer1) => {
  rl.question("enter wgf graph", (answer2) => {
    rl.question("enter the process initiating probe", (input3) => {
      // var result = +answer1 + +answer2;
      n = Number(answer1);
      arr = answer2.split(" ");
      arr = arr.map((item) => {
        return Number(item);
      });
      console.log(arr);
      while (arr.length) {
        graph.push(arr.splice(0, n));
      }
      console.log(graph);
      init = Number(input3);
      console.log(init);
      // console.log(`The sum of above two numbers is ${result}`);
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (graph[i][j] == 1) {
            const obj = new Message(init, i, j);
            msg_list.push(obj);
            console.log(msg_list);
          }
        }
      }
      rl.close();
    });
  });
});