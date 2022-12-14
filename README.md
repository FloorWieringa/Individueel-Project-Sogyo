# IP

## Description
This is an escape room implementation, where the goal of the game is to escape with all the necessary information and your life intact. You can achieve this by interacting with the items in the room, by taking items and using them on other items, and by solving riddles. There are several puzzle loops, all of which need to be solved in order to finish the game.

## Visuals
![A visual representation of the room](https://i.imgur.com/8yHXfHD.png)

Above is a visual example of the room. The first line is the last part of the explanatory intro text. The white text is the explanation triggered by clicking somewhere in the room (in this case, the robot hand). The inventory at the bottom currently contains only a piece of wire, which can be used on the robot hand by clicking _Use item from inventory_ beneath the white text, and selecting _Wire_ from the list that appeared. Depending on the device, the inventory may appear at the bottom or at the right of the screen. It is not optimised for mobile view.

## Installation
This project uses a Gradle wrapper and currently runs the front-end using Node JS. In order to start the application, open Git Bash (or similar, but then please figure out how to translate the commands as well) in the client folder, and run _npm run build_. Then go back to the main folder, open another instance of Bash and run _./gradlew build run_. The application will open automatically. 

Update 280722: currently it only runs on heroku. Commit to git then run _git push heroku main_ to deploy a new version. The app currently runs run here: http://escape-room-the-lair.herokuapp.com/index.html. It is usually down, so shoot me an email if you would like to play. 

## Usage
It’s a game. You can play it.

## Support
For any questions about the project, or for hints on getting out of the room, you can reach me at fwieringa@sogyo.nl.

## Roadmap
Room for improvement:
- Addition of a notepad
- Mobile responsiveness
- Graphics
- UI intuitiveness

## Authors and acknowledgment
The story design is by Escape This Podcast, who can be found here: https://www.escapethispodcast.com/. Much thanks to them for letting me use their story!

The graphic for the main part of the room was made by Connie Sinteur.
