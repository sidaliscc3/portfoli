fetch('https://api.aladhan.com/v1/timingsByCity/20-05-2025?city=algeria&country=GB')
.then(response => response.json())
  .then(data => {
    console.log(data.data.timings);
  });
 
fetch('https://countriesnow.space/api/v0.1/countries')
  .then(response=>response.json())
  .then(data=> {
    console.log(data)
  });
