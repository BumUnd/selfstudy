'use strict';

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('btn').addEventListener("click",function(){
        //window.alert('とりあえずクリックは認識')
        let name = document.getElementById('name');
        let output = document.getElementById("nameoutput");
        let output2 = document.getElementById("nameoutput2");
        let output3 = document.getElementById("nameoutput3");
        let list = document.getElementsByName('name');

        //innnerText,innerHTMLの挙動違い確認。
        output.innerText= name.value;
        output2.innerHTML = name.value;

        //NodeListOf<HTMLElement>の取り扱い練習。
        output3.innerText = list.item(0).value;

        //正規表現練習

        //この書き方だと3桁以上4桁以下までマッチした部分だけ返しちゃうのでNG
        //例：123456-1234567 → result[0] = 1234-1234 result[1] = 1234 result[2] =1234
        //let regex = /([\d]{3,4})-([\d]{3,4})/i;

        let regex = /([\d]{3,})-([\d]{3,})/i;

        let matchornot = regex.test(name.value);
        let matchresult = name.value.match(regex);
        if(matchornot && matchresult[1].length < 5 && matchresult[2].length < 5){
            window.alert('電話番号入力を確認');
            window.alert(matchresult[0]);
        }else{
            window.alert('電話番号を入力してください');
        }

    },false)
    document.getElementById('container').addEventListener("click",function(){

        let itemA = document.getElementById('container').children;
        let itemB = itemA[0];
        window.alert(itemB);
    })
});
