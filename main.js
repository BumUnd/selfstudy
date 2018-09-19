document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('btn').addEventListener("click",function(){
        //window.alert('とりあえずクリックは認識')
        let name = document.getElementById('name');
        let output = document.getElementById("nameoutput");
        let output2 = document.getElementById("nameoutput2");

        //innnerText,innerHTMLの挙動違い確認。
        output.innerText= name.value;
        output2.innerHTML = name.value;
    },false)
})