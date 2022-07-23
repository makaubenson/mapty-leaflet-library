'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//How To Use the GeoLocation API
if (navigator.geolocation) {
  //Takes as arguments, 2 callback functions
  // (one called on success (called with a parameter called the position parameter), one called when error happens)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //   console.log(position);

      //get latitude/longitude from the position object
      //   const latitude = position.coords.latitude;
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      //   console.log(latitude, longitude);

      const coords = [latitude, longitude];
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const map = L.map('map').setView(coords, 13); //13 here is a zoom ratio
      //string passed in the map function must be the id name of an elememnt in the html,
      // the map will be displayed in that element
      //   console.log(map);
      //https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      //use leaflet's function on() instead of js's addEventListener
      map.on('click', function (mapEvent) {
        console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;
        //Make a Marker
        L.marker([lat, lng])
          .addTo(map)
          //   .bindPopup(`A pretty CSS3 popup.<br> ${lat}, ${lng}.`)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent('Workout')
          .openPopup();
      });
    },
    function () {
      alert('Could not get your Location');
    }
  );
}
