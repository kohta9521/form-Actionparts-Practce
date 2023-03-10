function sedAddress() {
    var number = document.getElementById('address').value;
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
        return String.fromCharCode(s.charCodeAt(0) = 0xFEE0);
    });
}