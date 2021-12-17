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
      console.log("Deadlock Detected at node i");
      setTimeout(() => {
        console.log(i);
      }, 10000);
    } else {
      const data = await promiseFunction(i);
      //   setTimeout(() => {
      console.log(data);
      //   }, 1000);
    }
    const kardia = await blockkarde();
  }
};
// resolver(1, 3);
exports.resolver = resolver;
