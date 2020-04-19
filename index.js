var errorMessage = '';
console.log('From outside');
function loadWeather(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((pos)=>{
            var cord = pos.coords;
            try {
                let apiKey = "d8f895a440cc6ab8db64e12cd3f4adca";
                let lat = cord.latitude;
                let lon = cord.longitude;
                let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
                fetch(url)
                .then(res=>res.json())
                .then(data=>{
                    document.getElementById('temp').innerHTML = data.main.temp;
                })
            } catch (error) {
                
            }
        });
    }else{
        errorMessage = "Browser does not support geolocation";
    }
}