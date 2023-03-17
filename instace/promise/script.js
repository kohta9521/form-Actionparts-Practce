var sample = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve();
    }, 1000);
});

sample.then(function(value) {
    console.log("Promise成功!");
});

console.log('先に出力');