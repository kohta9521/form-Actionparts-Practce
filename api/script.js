let search = document.getElementById('input');
let last = 00;

search.addEventListener('input', ()=>{
    
    let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
    let error = document.getElementById('error');
    let input = document.getElementById('input');
    let address1 = document.getElementById('address1');
    let address2 = document.getElementById('address2');
    // let address3 = document.getElementById('address3');
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
        if(data.status === 400){ 
            error.textContent = data.message;
        }else if(data.results === null){
            error.textContent = '郵便番号から住所が見つかりませんでした。';
        } else {
            address1.value = data.results[0].address1;
            address2.value = data.results[0].address2;
            console.log(data.results[0].prefcode)
            console.log(data.results[0].address2)
            last = data.results[0].prefcode
            console.log(last)
            // ここからselectbox の選択をする記述
            
        }
    })
    .catch((ex)=>{ 
        console.log(ex);
    });


    // 郵便番号未入力 都道府県選択の場合
    // fetchJsonp(url, {
    //     timeout: 10000, 
    // })
    // .then(response => response.json())
    // .then(data => {
    //     const select = document.getElementById('address2');

    //     data.forEach(item => {
    //         const option = document.createElement('option');
    //         option.value = data.results[0]
    //         option.text = data.reslut[0];
    //         select.appendChild(option)
    //     });
    // });

}, false);

console.log(last);

// const userInputValue = 'option2';
// const selectedIndex = Array.from(select.options).findIndex(option => option.value === userInputValue);
// select.selectedIndex = selectedIndex;