# Standard of Care

#### By: Advertising Solutions, LLC.

## Description

_A mobile application built to easily access the Standard of Care repository of medical information on mobile platforms._

## Technologies Used

* _HMTL_
* _JavaScript_
* _JSX_
* _NPM_
* _Webpack_
* _React-Native_
* _Expo_
* _Expo Go_
* _GraphQL_


## Setup/Installation Requirements

* Clone this repository to your local by running `$ git clone` [this repository](https://github.com/Rian-Carter/standardOfCare.git)
* Navigate to top-level of directory.
* In the main project directory, run command `$ npm install` in the terminal to install all necessary dependencies.
* In the terminal, run command `$ npm start` to run a live server, from here you can interact with the project via a simulator, Expo app (will need to be downloaded from mobile store) on mobile device, or through web-browser.


## Known Bugs

* On iOS devices, Browse Articles screen incorrectly renders blank space before returning API fetch.
* On iOS devices, Browse Articles screen is incorrectly capable of being dragged horizontally.

* ArticlesAPI.js is commented out. It is a WIP attempt to integrate ApolloClient/GraphQL to render the client's Word Press data object and populate article links into the app. Everything is set up pretty close to functional, until rendering the data object several layers deep causes issues trying to use .map() function to render objects as an Array in React Native.

## License

[MIT](https://opensource.org/licenses/MIT)


Copyright (c) 2022 Advertising Solutions, LLC.