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
            address2.value = data.results[0].address2;
            console.log(data.results[0].prefcode)
            console.log(data.results[0].address2)
            last = data.results[0].prefcode
            console.log(last)

            // ここからselectbox の選択をする記述

            const select = document.getElementById('address1');
            Array.from(select.options).forEach(option => {
                if(option.value === last) {
                    option.selected = true;
                }
            })

            // 選択された値を取得しその値によって市区町村を検索する

            select.addEventListener('input', (event) => {
                const selectValue = event.target.value;

                if (selectValue === option.value) {
                    // ここからAPIを叩く
                } else {
                    console.log('cant use address')
                }
            })
        }
    })
    .catch((ex)=>{ 
        console.log(ex);
    });


}, false);
