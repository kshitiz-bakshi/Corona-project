
const corona_url = 'https://corona.lmao.ninja/v2/countries?yesterday&sort';

async function getdata() {
    console.log("Updating map with real time data")
    const response = await fetch(corona_url);
    const data = await response.json();
    console.log(data);
    data.forEach(element => {
       
        latitude = element.countryInfo.lat;
        longitude = element.countryInfo.long;

        cases= element.cases;
        
        if (cases<100) {

            color="rgba(150, 233, 109, 1)";
        }
        else if((cases>100)&&(cases<1000)) {
            color="rgba(63, 146, 22, 1)";
        }
        else if((cases>1000)&&(cases<50000)){
            color="rgba(182, 84, 84, 0.87)"
        }
        else if((cases>500000)&&(cases<100000)){
            color="rgba(208, 57, 57, 0.86))"
        }
        else if((cases>100000)&&(cases<200000)){
            color="rgba(193, 26, 26, 0.97)"
        }
        else if((cases>200000)&&(cases<400000)){
            color="rgba(170, 9, 9, 1)"
        }
        else {
            color="rgba(58, 3, 3, 1)"
        }
       
        new mapboxgl.Marker({
            color: color
        })
        .setLngLat([longitude, latitude])
        .addTo(map);

    });
    

}
getdata();
// setInterval(() => {
//     getdata()
    
// }, 2000);


