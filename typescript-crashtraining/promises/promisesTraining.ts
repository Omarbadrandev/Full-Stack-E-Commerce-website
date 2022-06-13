let p = new Promise<void>((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve();
  } else {
    reject("failed");
  }
});

p.then((message) => console.log("this is in the then " + message)).catch(
  (message) => console.log("this is in the catch" + message)
);
