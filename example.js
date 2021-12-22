const readline = require("readline");
const { resolver } = require("./resolve");
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
  this.from = i;
  this.to = j;
}
rl.question("enter no of process", (answer1) => {
  rl.question("enter wgf graph", (answer2) => {
    rl.question("enter the process initiating probe", (input3) => {
      // var result = +answer1 + +answer2;
      n = Number(answer1);
      let t1 = new Date().getTime();

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
            count += 1;
            console.log(msg_list);
          }
        }
      }
      let isDeadlock = false;
      for (let j = 0; j < count; j++) {
        if (init == msg_list[j].to) {
          isDeadlock = true;
          console.log("The Deadlock has been detected");
          resolver(init, n);
          let t2 = new Date().getTime();
          console.log((t2 - t1) / 1000);
        }
      }
      if (isDeadlock) {
      } else {
        console.log("No deadlock has been detected");
      }
      //   rl.close();
    });
  });
});
