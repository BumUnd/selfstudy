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
    },false)
    document.getElementById('container').addEventListener("click",function(){

        let itemA = document.getElementById('container').children;
        let itemB = itemA[0];
        window.alert(itemB);
    })
})