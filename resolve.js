const promiseFunction = (i) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    resolve(i);
    // }, 2000);
  });
};
const blockkarde = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
};
const resolver = async (init, n) => {
  for (let i = 0; i <= n; i++) {
    if (init == i) {
      console.log(`Deadlock Detected at Process ${i}`);
      console.log(`Putting On Hold Process ${i}`);
      setTimeout(() => {
        console.log(`Executing the Process ${i}`);
        console.log(`Executed Process ${i}`);
      }, 10000);
    } else {
        console.log(`Executing Process ${i}`);
      const data = await promiseFunction(i);
      //   setTimeout(() => {
      console.log(`Excuted Process ${i}`);
      //   }, 1000);
    }
    const kardia = await blockkarde();
  }
};
// resolver(1, 3);
exports.resolver = resolver;
