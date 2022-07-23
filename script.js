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
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //   console.log(position);

      //get latitude/longitude from the position object
      //   const latitude = position.coords.latitude;
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      //   console.log(latitude, longitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },
    function () {
      alert('Could not get your Location');
    }
  );
}
//Takes as arguments, 2 callback functions (one called on success (called with a parameter called the position parameter), one called when error happens)
