let div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.style="border-radius:6px"
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Serach";
button.style="margin-left:5px"
button.addEventListener("click",fun);

let Active=document.createElement("div");
Active.setAttribute("id","Active");
let Deaths=document.createElement("div");
Deaths.setAttribute("id","Deaths");
let Recovered=document.createElement("div");
Recovered.setAttribute("id","Recovered");
div.append(input,button,Active,Deaths,Recovered);
document.body.append(div);


async function fun()
{
    let countryname=document.getElementById("country").value;
    console.log(countryname);
    let url=`https://api.covid19api.com/dayone/country/${countryname}`;
    let res= await fetch(url);
    let res1=await res.json();
    console.log(res1);
    let index=res1.length-1;
    Active.innerHTML=`<b>Total active cases:</b> ${res1[index].Active}`;
    Deaths.innerHTML=`<b>Total deaths:</b> ${res1[index].Deaths}`;
    Recovered.innerHTML=`<b>Total Recovered cases:</b> ${res1[index].Recovered}`;
}


