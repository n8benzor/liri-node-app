# LIRI-node-app

### Development
 - Developed for: University of Arizona Coding Bootcamp
 - Developed by: Nathan Benzor
 - Developed using: Node.js, Javascript
 - Demo of functioning app: [Video Link](https://www.youtube.com/watch?v=FAZ5A9gybso&feature=youtu.be)

  

### What does this app do?

LIRI (Language Interpretation and Recognition Interface) is a CLI (command line interface) application where the user can search for songs, concert dates, and movie information but entering specific commands to the CLI.

### API's and NPM Dependencies used:

**API's:** 

 - OMDB (online movie database)
 - Band in Town (API used to search for concert dates and venues)

  
  **NPM:**

 - Node-spotify-api
 - Axios
 - Moment
 - Dotenv

 
### Functionality of the app:
  Switch statements  that can be called by the user on the command line to activate the various functions.![switch statements](https://github.com/n8benzor/liri-node-app/blob/master/images/switch-code.png?raw=true)

When the user inputs the movie-this feature on the command line, the movieThis() function will trigger and display information about a movie they enter on the command line.
![movieThis function](https://github.com/n8benzor/liri-node-app/blob/master/images/movie-function-code.png?raw=true)

When the user inputs the concert-this feature on the command line, the concertThis() function will trigger and display information about an artist or band they enter on the command line.
![concertThis function](https://github.com/n8benzor/liri-node-app/blob/master/images/concert-function-code.png?raw=true)

When the user inputs the spotify-this feature on the command line, the spotifyThis() function will trigger and display information about a song title they enter on the command line.
![spotifyThis](https://github.com/n8benzor/liri-node-app/blob/master/images/spotify-function-code.png?raw=true)

When the user inputs the do-what-it-says feature on the command line, the doWhatItSays() function will trigger and display a predetermined song title that is ran through the spotify api npm.
![doWhatItSays function](https://github.com/n8benzor/liri-node-app/blob/master/images/do-what-function-code.png?raw=true)

### How to use this app:
**Step 1:**
You will need to install the correct npm packages to your CLI. To do this simply run this line..
`npm i`

**Step 2:**
On the command line enter one of the following commands...
`node liri.js movie-this movie name`
`node liri.js concert-this song name`
`node liri.js spotify-this artist name`
`node liri.js do-what-it-says`
![cli example](https://raw.githubusercontent.com/n8benzor/liri-node-app/master/images/cli-exmple.png)


**Step 3:**
The app will return data depending on the command entered from step 1.  An example of a possible output can look like..
![Liri node app movie-this example](https://raw.githubusercontent.com/n8benzor/liri-node-app/master/images/movie-example.png)


