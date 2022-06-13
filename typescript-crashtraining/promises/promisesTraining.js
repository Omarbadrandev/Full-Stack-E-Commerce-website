var p = new Promise(function (resolve, reject) {
    var a = 1 + 1;
    if (a == 2) {
        resolve();
    }
    else {
        reject("failed");
    }
});
p.then(function (message) { return console.log("this is in the then " + message); })["catch"](function (message) { return console.log("this is in the catch" + message); });
