function getcontry(){
const con =document.getElementById("m1").value;
let t=new Date();
  time= t.toLocaleTimeString()
  let s = t.toISOString().split("T")[0];
   document.getElementById("currentTime").innerHTML= `${time}`;
   fetch(`https://api.aladhan.com/v1/timingsByAddress/${s}?address=${con}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.data.timings);
    document.getElementById("at-1").innerHTML=`${data.data.timings.Fajr}  <span>Fajr</span>`
    document.getElementById("at-2").innerHTML=`${data.data.timings.Dhuhr}  <span>Dhuhr</span>`
    document.getElementById("at-3").innerHTML=`${data.data.timings.Isha}  <span>Isha</span>`
    document.getElementById("at-4").innerHTML=`${data.data.timings.Maghrib}  <span>Maghrib</span>`
     document.getElementById("at-5").innerHTML=`${data.data.timings.Imsak}  <span> imsak</span>`
     document.getElementById("at-6").innerHTML=`${data.data.timings.Midnight}  <span> Midnight</span>`
     document.getElementById("at-7").innerHTML=`${data.data.timings.Sunrise}  <span> Sunrise</span>`
     document.getElementById("at-8").innerHTML=`${data.data.timings.Lastthird}  <span> Lastthird</span>`
  })
  .catch(error => console.error(error));

}
