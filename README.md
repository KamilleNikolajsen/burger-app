# Burger-App

## To run the app
Clone the project and open it.

Then run the line: { npm run dev }
in the terminal, to start the app and mock database (db.jason)

I have put up a mock REST API based on a JSON file (the db.json).
This is configures in the package.json file under scripts.
When running the {npm run dev} both the start and the server script will be run.
This allows me to develop an application with a mock backend that serves data from the db.json file

## How it works

#### *Home*
On the home page you can see a description of the site.

#### *Review*
On this page you can add a review of your burger, and see others reviews.
When a review is submittet, a check is done to see if both fieds are filled, 
if so a pop-up will show a succesfull submitting of the review. If not a pop-up will show an error pop-up.

#### *Gallery*
In the gallery you can see all the pictures people have uploaded of their burgers, and upload your own pigture.
When a picture is submittet, a check is done to see if both fieds are filled, 
if so a pop-up will show a succesfull submitting of the picture. If not a pop-up will show an error pop-up.

#### *Map*
On this page you can seach for nearby burger places to find your next burger.
When searching for a place, a check is done to see if the search filed is filled, 
if so the seached item will show on the map, if such place exists. If not a pop-up will show an error pop-up.
