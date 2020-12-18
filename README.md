# Getting Started with Portfolio

This is the public version of my portfolio website [Kalim.Pk](https://kalim.pk) \
After a long time I made the source code of my personal website public. \
I made this saperate public repo to protect my secret information on production build. \
I don't update this public repository often. \
Last updated on 18-Dec-2020

This website is built in React. \
This website is linked with [Portal](https://github.com/yousufkalim/portfolio-portal) of this website. \
I used firebase with these two projects. \
You need to understand that how these two projects are communicating with each other using firebase.

## Prerequisites

**Step 1**

First of all go to [Portal](https://github.com/yousufkalim/portfolio-portal) and set it up with firebase.

**Step 2**

Go to src/firebase.js \
Add the configuration of your firebase Portal project, So we can fetch data that was posted with portal

**If you don't wanna use firebase and portal then you don't need first two Steps**

Just delete the src/firebase.js. \
And configure the controllers/dataFetch.js with your API to fetch articles, portfolios and quotes. \
And update the data in data directory according to your need.

## Initialize the Project

In the project directory, you can run:

### `npm install`

Install all the dependencies that used in this project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
