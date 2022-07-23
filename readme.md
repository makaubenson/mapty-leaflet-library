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
