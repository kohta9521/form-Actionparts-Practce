let search = document.getElementById('input');
let last = 00;

search.addEventListener('change', ()=>{
    
    let api = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=';
    let error = document.getElementById('error');
    let input = document.getElementById('input');
    let address1 = document.getElementById('address1');
    let address2 = document.getElementById('address2');
    let param = input.value.replace("-",""); 
    // let param = input.value.replace("ー",""); 
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
            let name = data.results[0].address2;
            console.log(name)
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
            // 都道府県を指定
            const prefectureCode = last;
            console.log(prefectureCode);

            fetch(`https://apis.postcode-jp.com/api/v3/prefectures/${prefectureCode}/cities`)
                .then(response => response.json())
                .then(data => {
                    const city = data.data.map(city => city.city)
                    console.log(city); 

                    city.forEach((option) => {
                        const optionElement = document.createElement('option');
                        optionElement.value = option;
                        optionElement.textContent = option;
                        address2.appendChild(optionElement);

                        const cityName = city.find(item => item == name)
                        console.log(cityName)

                        if (cityName) {
                            // optionタグが見つかった場合、select要素の選択状態を変更する
                            address2.selected = true;
                        }

                    });

                    
                    // Array.from(address2.options).forEach(option => {
                    //     if(option.value === last) {
                    //         option.selected = true;
                    //     }
                    // })
                })
                .catch(error => console.error(error));

            // =================================

            

        }
    })
    .catch((ex)=>{ 
        console.log(ex);
    });


}, false);
