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
// let map, mapEvent;

class App {
  //Private Instance properties
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    //How To Use the GeoLocation API
    if (navigator.geolocation) {
      //Takes as arguments, 2 callback functions
      // (one called on success (called with a parameter called the position parameter), one called when error happens)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your Location');
        }
      );
    }
  }

  _loadMap(position) {
    //   console.log(position);

    //get latitude/longitude from the position object
    //   const latitude = position.coords.latitude;
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    //   console.log(latitude, longitude);

    const coords = [latitude, longitude];
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    this.#map = L.map('map').setView(coords, 13); //13 here is a zoom ratio
    //string passed in the map function must be the id name of an elememnt in the html,
    // the map will be displayed in that element
    //   console.log(map);
    //https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //use leaflet's function on() instead of js's addEventListener to handle clicks on maps
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    //Clear Input fields
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';

    //Display Marker
    // console.log(mapEvent);
    const { lat, lng } = this.#mapEvent.latlng;
    //Make a Marker
    L.marker([lat, lng])
      .addTo(this.#map)
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
  }
}

const app = new App();
