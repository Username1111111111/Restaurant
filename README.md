# Restaurant <img src="https://img.shields.io/badge/Status-Complete-green" style="vertical-align: middle;">
> App for selling dishes, with cart (React-Redux, fake REST API)
> <p><a href="https://restaurant-app-test-demo.herokuapp.com/">Live demo here</a></p>
> <p>Or 👇:</p>
<a href="https://restaurant-app-test-demo.herokuapp.com/">
 <img src="./_resourses/restaurant.png">
</a>

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Contact](#contact)


## General Information
- This was done as one of my Udemy learning projects
- It was inteded for practice with:
	- React 
	- Redux
	- json-server
	- server queries (GET, **POST**)
	- HOC + React.Context + service
	- Working with reducer, storage, action creators
	- Routing

## Technologies Used
- react-redux
- json-server (fake REST API)
- node-sass
- react-router-dom
- prop-types

## Features
- Routing to Menu / Cart
- Add dish to cart
- Increase/decrease amount of menu items in cart
- Completely remove dish from cart
- Total price of order calculation
- Checkout (sends order id, dishes, amount of each dish and total price to db.json to server)

## Screenshots
![Screenshot](./_resourses/restaurant.gif)

## Setup
1. Clone the repo  
2. Type in terminal `npm install` inside cloned repo

**To build:**
* `npm build`

## Usage
- Type in terminal `json-server --watch src/db.json --port 3004` inside cloned repo
- Type in terminal `npm start` inside cloned repo
- Enjoy 👍

## Contact
<p style="font-size: 16px;"><a style="text-decoration: none;"href="https://github.com/Username1111111111/Username1111111111">@Username1111111111</a><details> 
  <summary>The Frontend developer</summary>
  💪
</details></p>


