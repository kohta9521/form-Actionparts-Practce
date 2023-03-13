const promise = new Promise((resolve, reject) => {
    reject();
}).then (() => {
    console.log('resolved');
}).catch(() => {
    console.log('rejected');
})