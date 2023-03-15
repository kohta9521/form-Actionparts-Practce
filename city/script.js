const prefecture = 13; // 都道府県を指定

fetch(`https://apis.postcode-jp.com/api/v3/prefectures/${encodeURIComponent(prefecture)}/cities`)
  .then(response => response.json())
  .then(data => {
    const cities = data.cities.map(city => city.city); // 市区町村名だけを抽出
    console.log(cities); // 取得した市区町村の配列
  })
  .catch(error => console.error(error));