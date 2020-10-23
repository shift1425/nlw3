navigator.geolocation.watchPosition((position) => {
    localStorage.setItem('latitude', position.coords.latitude);
    localStorage.setItem('longitude', position.coords.longitude); 
   }, (err) => {
      alert("A aplicação Precisa acessar seu geolocalização, por favor permita");
});

latitude = localStorage.getItem('latitude');
longitude = localStorage.getItem('longitude');

fetch(`https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude},${longitude}&resultType=address&lang=pt-BR&apiKey=py5AJcABmfDQ7NJ9dBFhSTUzZs4vJg9_iJ3sFGSwQP4`).then( async (response)=>{

    positionUser = await response.json()
    const a = positionUser.items[0].address
    console.log(a)
    document.getElementById('state').innerHTML = positionUser.items.address.state
    document.getElementById('city').innerHTML = positionUser.items.address.city
})
    
    
