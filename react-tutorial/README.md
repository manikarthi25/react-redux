# React

# Prerequites
 - HTML
 - CSS
 - Java Script
   - this keyword
   - filter
   - map
   - reduce
 - ES6
   - const
   - let
   - template literal
   - object literal
   - arrow function
   - default parameter
   - rest and spread operator
   - destructuring assignment

# Software Installation
   - nodes
   - IDE like VS code

# What is React
 - Open Source Library
 - to build user interface
 - Component Based Architecture
 - Reuseable Code
 - Declarative 
 - Develop SPA - Single Page Application
 - Efficently Updating and Rerendering of components
 - DOM - Document Object Model
 - React Native for Mobile Application

# Create React APP basic skeleton 
 - npx create-react-app project-name
 - cd project-name
 - npm start

# Application FOlder Structure
 - package.json -> (all dependency and scripts(to run application and test case) available)
 - package-lock.json 
 - node-module -> all dependency download here
 - index.html -> starting point
 - index.js -> App componend render into root DOM
 - App.js -> Represent the view in the browser
 - App.css -> write style sheet
 - App-test.js -> write test case

# functional Component
 - it is just java script function
    props(properties) -----> java scrtipt function  -----> HTML(JSX - Describe the html page)

# export vs export deafult
  export const Mani => {}
  1. export - allow to import with exact component name 
            - import Mani from ''
  2. export default - allow to import with different name
            - import ManiEX from ''

# class Component
  - props -----> ES6 class -----> HTML(JSX)
  - class contains multiple state and which is used for maintain private property of that class
  - extend Component class
  - return JSX using render method

# functional component vs class component
  1. function component
        - simple to implement
        - absence of "this" keyword
        - Solution without state
        - stateless component
  2. class component
        - maintain their own private state - state
        - Complex UI logic
        - maintain life cycle
        - stateful component

# JSX - Javascript XML
  - JSX contains tag name, attribute and children
  - JSX convert into java script to understand browser
  - React.createElement("div",{Id:"givenId", className:"givenClassName"},React.createElement("h1",null, "Mani")) 
  - <div id="givenid" className="givenClassName"><h1>Mani</h1></div> both are same
  
# Props vs State
  1. props - Properties
     - Immutable -> Can't change the value
     - In functional component -> props.name
     - In class component -> this.props.name

  2. state
     - can change the value
     - In functional component -> useState() using hooks
     - In class component -> this.state.name

   
 
           




















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)