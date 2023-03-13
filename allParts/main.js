let inputVal;
let lastNumber;

const input = document.getElementById("input");
input.addEventListener("input", (event) => {
    inputVal = event.target.value;
    console.log(inputVal);
});


input.addEventListener("input", (event) => {
    const value = event.target.value;
    if (value.length !== 7) {
        console.log("7文字で入力してください");
    } else {
        console.log("OK!!!")
        sedAddress(inputVal);
        lastNumber = inputVal;
        console.log(lastNumber);
    }
});

// 入力された値が全角か半角かを判定   →  全角だった場合半角へ変換
function sedAddress(number) {
    // var number = document.getElementById('address').value;
    if (checkChar(number) === true) {
        console.log(`${number} :   全角`);
        fullWIdth2HalfWidth(number);
        console.log(`${number} : 全角 → 半角変更後`);
    } else {
        console.log(`${number} :  半角`);
    }
}

    // 入力された値が半角か全角かを判定する関数
    function checkChar(input) {
        var regex = /^[^\x01-\x7E]*$/;
        return regex.test(input);
    }
    // 全角を半角へ変換する関数
    function fullWIdth2HalfWidth(src) {
        return src.replace(/[A-Za-z0-9]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
        });
    }

// ====================================

// 住所検索API
    // はじめに条件分岐で当てはまるか否かの判断が必要
    //  1) lasNumberに格納されている住所を元にAPIを叩く
    //  2)叩いた住所を元にcheckbox の中身を変更する
    //  3)変更した後の値を何かしらに格納する
    //  4)変更後の値を元に次の転職希望エリアの都道府県を選択させる
// ====================================

