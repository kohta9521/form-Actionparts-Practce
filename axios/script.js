const axios = require('axios')

// IDを付加したurl
axios.get('/user?ID=12345')
    // thenで成功した場合
    .then(function (response) {
        console.log(response);
    })
    // catchでエラーの挙動を定義
    .catch(function (error) {
        console.log(error);
    });