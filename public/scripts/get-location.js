navigator.geolocation.watchPosition((position) => {
    localStorage.setItem('latitude', position.coords.latitude);
    localStorage.setItem('longitude', position.coords.longitude);       
   }, (err) => {
      alert("A aplicação Precisa acessar seu geolocalização, por favor permita");
});

latitude = localStorage.getItem('latitude');
longitude = localStorage.getItem('longitude');

while (!latitude) {
    fetch(`https://nominatim.openstreetmap.org/reverse?&format=json&lat=${latitude}&lon=${longitude}`).then( async (response)=>{
    
    positionUser = await response.json()
    document.getElementById('state').innerHTML = positionUser.address.state
    document.getElementById('city').innerHTML = positionUser.address.city
})
setTimeout(500)
}
