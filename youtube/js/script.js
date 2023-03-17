function asyncFunction() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                console.log("非同期処理")

                resolve();
            }, 1000)
        } catch (e) {
            reject();
        }
    })
}

asyncFunction().then(() => {
    console.log("recolve後の処理");
}).catch(e => {
    console.log("reject後の処理");
})

function asyncFunction() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                console.log("非同期処理")
                const num = 1
                resolve(num)
            }, 1000)
        }
    })
}


// new Promise(function (resolve, reject) {
//     try {
//         setTimeout(() => {
//             console.log("非同期処理")

//             resolve()
//         }, 1000)
//     } catch (e) {
//         reject()
//     }
// })