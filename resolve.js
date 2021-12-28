const promiseFunction = (i) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    resolve(i);
    // }, 2000);
  });
};
const simulateProcess = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
const resolver = async (init, n) => {
  console.log(`Deadlock Detected at Process ${init}`);
  console.log(`Putting On Hold Process ${init}`);
  for (let i = n; i >= 1; i--) {
    if (init == i) {
      setTimeout(() => {
        console.log(`Executing the Process ${i}`);
        console.log(`Executed Process ${i}`);
      }, 5000);
    } else {
      console.log(`Executing Process ${i}`);
      const data = await promiseFunction(i);
      //   setTimeout(() => {
      console.log(`Excuted Process ${i}`);
      //   }, 1000);
    }
    const kardia = await simulateProcess();
  }
};
// resolver(1, 3);
exports.resolver = resolver;
