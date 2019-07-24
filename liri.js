require("dotenv").config();

const keys = require("./keys.js");
// const spotify = new Spotify(keys.spotify);
const axios = require('axios');
const fs = require("fs");
const moment = require("moment");

const argv = process.argv;
const action = process.argv[2];
const value = process.argv[3];
console.log(action);
console.log(value);

const artist = "";
const movieName = "";

switch (action) {
    case "concert-this":
      concertThis();
      break;
    
    case "spotify-this":
      spotifyThis();
      break;
    
    case "movie-this":
      movieThis();
      break;
    
    case "do-what-it-says":
      doWhatItSays();
      break;
    }

    function concertThis(){
        const queryUrl = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp";

        // This line is just to help us debug against the actual URL.
        console.log(queryUrl);

        axios.get(queryUrl).then(
        function(response) {
            console.log(response);
  })
    }

    // function spotifyThis(){

    // }

    function movieThis(){
        const queryUrl = "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy";

            // This line is just to help us debug against the actual URL.
            console.log(queryUrl);

            axios.get(queryUrl).then(
            function(response) {
                console.log(response.data);
                console.log("Movie title: " + response.data.Title);
                console.log("Release year: " + response.data.Year);
                console.log("IMDB rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
                console.log("Country produced: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Movie plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
  })
    }

    // function doWhatItSays(){

    // }