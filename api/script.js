let search = document.getElementById('input');
let last = 00;

search.addEventListener('input', ()=>{
    
    let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
    let error = document.getElementById('error');
    let input = document.getElementById('input');
    let address1 = document.getElementById('address1');
    let address2 = document.getElementById('address2');
    let param = input.value.replace("-",""); 
    let url = api + param;

    
    fetchJsonp(url, {
        timeout: 10000, 
    })
    .then((response)=>{
        error.textContent = ''; 
        return response.json();  
    })
    .then((data)=>{
        if(data.status === 400){ 
            error.textContent = data.message;
        }else if(data.results === null){
            error.textContent = '郵便番号から住所が見つかりませんでした。';
        } else {
            address1.value = data.results[0].address1;
            // address2.value = data.results[0].address2;
            console.log(data.results[0].address2)
            last = data.results[0].prefcode

            // ここからselectbox の選択をする記述

            const select = document.getElementById('address1');
            Array.from(select.options).forEach(option => {
                if(option.value === last) {
                    option.selected = true;
                }
            })

            // 選択された値を取得しその値によって市区町村を検索する 問題点 選択しないと発火しない
            
            select.addEventListener('input', (event) => {
                const selectedValue = select.options[selectElement.selectIndex].value;
                console.log(selectedValue);
            })

            // 郵便番号から市区町まで検索できた場合の処理
            const cityArray = [];

            // 都道府県を指定
            const prefectureCode = last;
            console.log(prefectureCode);

            fetch(`https://apis.postcode-jp.com/api/v3/prefectures/${prefectureCode}/cities`)
                .then(response => response.json())
                .then(data => {
                    const city = data.data.map(city => city.city)
                    console.log(city); 
                })
                .catch(error => console.error(error));
                // 検索できた市区町村をHTMLのoptionとして差し込み／出力する処理
                // =================================================

                // 郵便番号検索のvalueと比較し等しいものを選択する処理
                // const select2 = document.getElementById('address2');
                // Array.from(select2.options).forEach(option => {
                //     if(option.value === last) {
                //         option.selected = true;
                //     }
                // })
                // =========================================
            // =================================

            

        }
    })
    .catch((ex)=>{ 
        console.log(ex);
    });


}, false);
