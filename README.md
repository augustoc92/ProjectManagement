# ProjectManagement

This is a project that's followed as a tutorial commit by commit to learn the basics of React with Ant Design, Redux, Redux Form, selectors and Firebase database.

# What are we building 

Its a simple crud, where we use React-Redux to manage the state of the app, React-Router to handle routes, Ant design for styles, Redux form to validate the new items, Firebase to handle de data. A selector is also used to handle the Tables columns and filters. This was built following **SOLID** principes to make this app scalable for future use.

###### Here's an image of how the app looks like when you compleate the steps.

![alt text](https://i.ibb.co/pW4S8DC/Screen-Shot-2019-01-09-at-15-14-13.png)

## Used libraries 
Trough the procces we will use:

- React: For handling components
- React Router: For handling routes
- Redux: Handling an state within our application
- Redux thunk: To handle our api calls.
- Redux dev tools extension: To be able to use chrome redux dev tools
- Redux form: For validations and filtering
- Ant Design: A library with a base of components
- Firebase: To store and handle data.
- Reselect: We will use reselect with our selectors, filtering and to play along with ant design columns on tables.
- Lodash and Ramda: This two will be used for some coding logic methods itearating over objects.

You can check the package json of the final version in case you need to view versions of each one.

## Step by step
###### Each commit represents a step toward building the final app

**Create a repo** 

This is a basic commit, just making our first commit from the terminal. Creating a new folder and connecting it to github.
Here we are going to create a github repository, create a new folder, then initialize a new repo from the folder and connect it with our online repository.

**Create React App**

We will create react app and commit the changes to our github so we can start from here.
We will run "create react app" with the name of our application in our terminal and then add the changes, commit the changes and push them to our origin source.

**Yarn add ant design**

We will install ant design and create a button on the main page of create react app
First we run:
- "yarn add antd" in our terminal.
Then we move inside our App.js we will import a button from antd and start our application

**Added Redux, redux modules, store, redux dev tools** 

Here we are going to install redux, with redux dev tools. Firstly we will create a store and envolve our application inside of the store, afterwards we will create our modules and with redux dev tools we will make our first drive trought redux and check it out on chrome extension Redux Dev Tools.

**React Router, routes and new components**

We will install React Router and create some new routes,
- yarn add react-router
We will wrap our app inside React router, and create some new components so we can redirect the user through the nav bar to our new routes. Just write the title of the components to see the changes happening in our screens. We will use react router to redirect us wherever we want to go, as a child of our app component in App.js.

**Added Api Calls, Tables for showing the data, selector for loading columns**

In this step, we are going to mock a database with Postman. So we can use redux with Redux-Thunk to create our first set of actions. We are going to install lodash, and reselect in order to create a selector that we will use to get the columns from the data we retrieve from our api calls and send it to ant design table to render the columns we need.
We are going to create an fetch improved to handle our calls, so we can send Get, Post, Put, or Delete from the same place changing only the destination with curried functions. We will use redux-thunk to be aware when the action is dispatched, and when the action is completed on a fail or complete result, and handle our app with an error message or just retrieving the data we need and showing it to the user.

**Added Add, Put, Delete options**

We will create a side bar to pop from a side to show the item we are adding, to update an existing item when double clicking a row, and on a right click the app will display a modal to check if the user wants to remove the selected row. Instaling ramda and using reject so we do not send empty fields to our api post or put calls is my personal choice, but you can go with whatever suits you best.
Since our application is growing we are going to create some new folders so we keep ourselves organized. We are also going to create a new module in redux so we can handle the UI from everywhere and without repeating ourselves.
Before closing this branch up we will create an index so we can keep better control of our "forms" when updating or adding a new item. We are going to handle them trough redux-form. First we will need to install it. And we will validate all the fields are 'required' before sending a submit of the corresponding form.

## Clients and Resources full redux module cycle, new forms added ## 

Here we are just wrapping it all up, creating the modules we lack in redux and completing our application with the client and resources modules. We will use the new structure with the forms folders and use redux-form to validate each one of the different items we are handling. 
We have succesfully completed a crud app at this point, we are just making it grow bigger.

## Firebase app connected ##

In this module I've connected the app with a real time database I've created in Firebase. Handling my objects in a different way, and moving from an array database to an object database. I've created the firebase folder with the config and the key to each one of the collections we will handle.

## Styles with PostCss, css modules, handling data with firebase, styled forms ##

Here we will style our application using react post css, splitting some of the components we have been using in every one of our files into a shared component folder. We are going to create some 'component.module.css' files to handle the styling. And we are also connecting the rest of our app with the firebase database. A navbar from ant design is going to start being used as our navigation component. And we will stop using redux thunk for a moment, until we handle the possible rejections of firebase database.
