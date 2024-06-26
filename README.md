# Jeopardy for Hoya Devs

This is the first full-stack project we'll be doing in Hoya Devs, and should be a good template for future projects.

## Backend

The backend is a very simple, bare-bones REST API served by Express. It has a single endpoint which returns a list of questions in JSON format.

It is essential that you use the `cors` middleware to allow requests from the frontend.

## Frontend

The frontend is a React app that fetches the questions from the backend and displays them in a Jeopardy-style board. This will be the main part of the project, and will require the most work.

The frontend should be able to:

- Fetch the questions from the backend
- Display the questions in a Jeopardy-style board
- Allow the user to select a question
- Display the question and allow the user to answer it
- Keep track of the score

## How to run

To run this project, please cd into the backend directory and type 

`npm run watch`

Then, open another terminal and run 

`npm run dev`

Then, cd into the frontend directory and type

`npm run start`

This should start the backend server on port 4000 and the frontend on port 3000. To access the frontend, navigate your web browser to 

`localhost:3000`

## Stretch Goals

We'll only have enough time in class to complete the basic skeleton of the project. You'll need to complete the styling and CSS outside of class. I'd really recommend thinking about display: flex.
