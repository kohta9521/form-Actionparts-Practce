const promise = new Promise((resolve) => {
    resolve();
}).then(() => {
    console.log('resolveしたよ');
});