# MyWeatherApp
A web application that displays a 3-day weather forecast data from [AccuWeather Forecast API](https://developer.accuweather.com/). It loads the weather forecast based on the provided city/region.

Built using ReactJS with TypeScript and Bootstrap

## Tech stack
- ReactJS using hooks
- TypeScript

## Packages used
- [React-bootstrap](https://react-bootstrap.github.io/) - a complete re-implementation of the Bootstrap components using React
- [React-Select](https://www.npmjs.com/package/react-select) - for autocomplete implementation of selecting locations from AccuWeather Forecast API
- [Axios](https://www.npmjs.com/package/axios) - used for fetching data from AccuWeather API

## Getting Started

Make sure the API key is active. To update the key, follow the steps:
1. Log in to https://developer.accuweather.com/.
2. Go to `MY APPS` section.
3. Click `Add a new App` and enter the app details. Click `Create App`.
4. Go to the newly created app and copy the API Key.
5. Paste it in the `apiKey` key in configuration file found in `src/api/config.ts`

You may use the following reserved API key for testing.
API Key: `ftmjGQdi8LHuOKIx8vXKL5R1ABlkDolG`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
