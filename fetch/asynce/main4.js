const promise = new Promise((resolve) => {
    resolve('resolveしたよ');
}).then((val) => {
    console.log(val);
});