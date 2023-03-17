new Promise(function (resolve, reject) {
    try {
        // 非同期処理
        resolve();
    } catch (e) {
        // 異常時終了の処理

        // return の代わりに以上終了したことを表すrejectを返す
        reject();
    }
})








// 関数処理を行う関数を定義
// const synchrounsFunc = () => {
//     console.log("これは同期処理関数内のログです。");
//     return "完了!";
// }

// const message = "同期処理　";
// const result = synchrounsFunc();
// console.log(message + result);

