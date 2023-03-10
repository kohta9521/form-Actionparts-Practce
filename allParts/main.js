// 入力された値をリアルタイムで監視し変数へ代入

const address = document.getElementById("input");
address.addEventListener('input', handleChange);

function handleChange(event) {
    const value = event.target.value;
    console.log(value);
}
// ====================================

// 入力された値が全角か半角かを判定   →  全角だった場合半角へ変換
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
    function checkChat(input) {
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
    // １）選択された都道府県のIDに応じで市区町村データをとってくる
    //  2）都道府県が選択されたことによりIDを認識　市区町村データをとってくる
// ====================================

