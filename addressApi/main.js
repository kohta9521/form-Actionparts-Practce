// 選択されたselectbox 内のidを取得する関数を定義
function clickBtn() {
    const pre = document.getElementById('prefecture').value;
    document.getElementById('span3').textContent = pre;
}

// ↑ここまでが今日のタスクの理想

// 取得した都道府県のvalue を元にAPIを叩く
// APIから取ってきた市区町村の内容をselectbox のなかに追加する
// 最終的に郵便番号の値から都道府県を設定　→ 　市区町村を選択するように自動化
// これらの値をまとめてデータとして保管するようにする

// 完了
