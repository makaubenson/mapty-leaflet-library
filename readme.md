# MAPTY APP: OOP, GEOLOCATION, EXTERNAL LIBRARIES

## How To Plan a Web Project

### Planning

- User Stories- Description of the syetm functionality from the users perspective.
- Features - Get the features from the stories given by user in his/her stories.
- Flow Chart - Put Features in a flow chart (What we will build)
- Architecture - How we build it. What holds all the code together.

### Development

- Implementation of the planned project

#### User Stories

- Description of the syetm functionality from the users perspective.
- `e.g`
- As a user, I want to log my running workouts with location, distance, time, pace and steps/minute, so i can keep a log of all my running.
- As a user i want to log my cycling workouts with location, distance, time, speed and elevation gain, so i can keep a log of all my cycling.
- As a user i want to see all my workouts at glance so i can easily track my progress over time.
- As a user i want to also see my workouts on a map so i can easily check where i work out the most.

#### Features

- Map where user can click and add new workout. Use geolocation to display current location. Form to Input rest of the data(time,pace,steps/minute).
- Form to input distance, time,speed elevation
- Display all workouts in a list
- Display all workouts on the map.
- store workout data in the browser using Local storage API.
- On page load, read the saved data from local storage and display.

## How To Use geolocation API

```
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
```

- `navigator.geolocation.getCurrentPosition()` - Takes as arguments, 2 callback functions (one called on success (called with a parameter called the position parameter), one called when error happens)


![Mapty Architecture](https://user-images.githubusercontent.com/59168713/180614589-f8b80a4a-1982-4c4a-a73c-d0c59ec0f463.png)

## Using Local storage API

- `localStorage.setItem('workouts', JSON.stringify(this.#workouts));`
- `localStorage.setItem()` expects 2 arguments, The first one being `key`, and the second one `value`
- In the above example `workouts` is key and `JSON.stringify(this.#workouts)` is value
- JSON.stringify() - converts object to string

```
 const data = JSON.parse(localStorage.getItem('workouts'));
    console.log(data);
```

- Get and store local storage data in a variable.
- Parse in the `localStorage.getItem() ` the key of the data stored. in this case `workouts`
- `JSON.parse()` simply converts strings back to object

### Considerations of Additional Features

![Mapty Challenges](https://user-images.githubusercontent.com/59168713/180614579-73145be8-a4b8-4aad-aa10-44c7e61aa2e6.png)







