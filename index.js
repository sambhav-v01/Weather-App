function getData(){
    const city=search.value;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b90ca55f8bmshedff06ef454aedep1aa051jsnf7d0cd9ee058',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
.then(response=> response.json())
.then(response=> {console.log(response);
    temp.innerHTML=response.temp;
    ws.innerHTML=response.wind_speed;
    ht.innerHTML=response.humidity;
})
.catch(err=> console.error(err));
}
