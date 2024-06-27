function show_table(){
    var n1=document.getElementById("f1").value
    var a=parseInt(n1)
    var ans=document.getElementById('answer')
    for(var i=1;i<=10;i++)
        {
            var ele=document.createElement('ele')
            ele.className="element"
            ele.innerHTML=`<p>${a} * ${i} = ${a*i}</p>`
            ans.appendChild(ele)
        }
}function Reset()
{
    var ans=document.getElementById('answer')
    var n1=document.getElementById("f1")
    n1.value=""
    ans.innerHTML=""
}