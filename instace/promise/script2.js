function getNumber(num) {
    return new Promise((resolve, reject) => {
        if(num => 3) {
            setTimeout(function() {
                resolve(num);
            }, 1000);
        } else {
            reject('Falied!!');
        }
    });
}

getNumber(3).then(function(result) {
    console.log(result);
    return result + 3;
}).then(function(result) {
    console.log(result);
    return result + 3;
}).then(function(result) {
    console.log(err);
});