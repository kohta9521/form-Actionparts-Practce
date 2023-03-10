let inputVal;

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
    }
});
// console.log(inputVal);

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



// 入力された値をリアルタイムで監視し変数へ代入
// ====================================


// 住所検索API
let search = document.getElementById('search'); //  この部分のEventListenrは上記のinput  タグが更新されるたびに走らす
input.addEventListener('click', ()=>{
    
    let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
    let error = document.getElementById('error');
    let input = document.getElementById('input');
    let address1 = document.getElementById('address1');
    let address2 = document.getElementById('address2');
    let address3 = document.getElementById('address3');
    let param = input.value.replace("-",""); //入力された郵便番号から「-」を削除
    let url = api + param;
    
    fetchJsonp(url, {
        timeout: 10000, //タイムアウト時間
    })
    .then((response)=>{
        error.textContent = ''; //HTML側のエラーメッセージ初期化
        return response.json();  
    })
    .then((data)=>{
        if(data.status === 400){ //エラー時
            error.textContent = data.message;
        }else if(data.results === null){
            error.textContent = '郵便番号から住所が見つかりませんでした。';
        } else {
            address1.value = data.results[0].address1;
            address2.value = data.results[0].address2;
            address3.value = data.results[0].address3;
        }
    })
    .catch((ex)=>{ //例外処理
        console.log(ex);
    });
}, false);
    // １）選択された都道府県のIDに応じで市区町村データをとってくる
    //  2）都道府県が選択されたことによりIDを認識　市区町村データをとってくる
// ====================================

