// .env file containing the spotify credentials needed to use the api
require("dotenv").config();

// variables set
const keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const axios = require('axios');
const fs = require("fs");
const moment = require("moment");

// commandline argument variables
const argv = process.argv;
let action = process.argv[2];

let value = "";
console.log(value);
// loop that will allow the user to search a string containing more than 1 word, or that uses more than one index
for (let i = 3; i < argv.length; i++) {

  if (i > 3 && i < argv.length) {
    value = value + "+" + argv[i];
  }
  else {
    value += argv[3];
  }
}

// switch statements that the user can call which will activate a given function
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
// concertThis function search the bands in town api and displays predetermined result items from a search query
    function concertThis(){
        if(!value){
            console.log("I'm sorry there are no upcoming shows, please try another artist or band.")
        }
        const queryUrl = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp";
        
        axios.get(queryUrl).then(
            function(response) {
            let results = response.data;
            // console.log(results);
            for (let i = 0; i < results.length; i++){
            console.log("--------------------")
            console.log("Venue: " + response.data[i].venue.name);
            console.log("Location of venue: ");
            console.log("---City: " + response.data[i].venue.city);
            console.log("---State/Region: " + response.data[i].venue.region);
            console.log("---Country: " + response.data[i].venue.country);
            console.log("Date of event: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
            console.log("--------------------")
        }
        })
    }

    function spotifyThis(){
        if(!value){
            value = "the sign ace of base";
        }
        const spotify = new Spotify(keys.spotify);
           
          spotify.search({ type: 'track', query: value }).then(function(response) {
              let results = response.tracks.items;
            //   console.log(results);
            //   for (let i = 0; i < results.length; i++){
                console.log("--------------------")
                console.log("Artist(s): " + results[0].artists[0].name);
                console.log("Song name: " + results[0].name);
                console.log("Preview link: " + results[0].preview_url);
                console.log("Album name: " + results[0].album.name);
                console.log("--------------------")
            // }
            })
            .catch(function(err) {
              console.log(err);
            });
    }

    function movieThis(){
        
        if(!value){
            value = "Mr Nobody";
            console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/")
            console.log("It's on Netflix!")
        } 
        const queryUrl = "http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy";
        
        axios.get(queryUrl).then(
            function(response) {
                console.log(response.data);
                console.log("--------------------")
                console.log("Movie title: " + response.data.Title);
                console.log("Release year: " + response.data.Year);
                console.log("IMDB rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
                console.log("Country produced: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Movie plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("--------------------")
  })
    }

    function doWhatItSays(){
        fs.readFile("random.txt", "utf8", function(error, data) {

            // If the code experiences any errors it will log the error to the console.
            if (error) {
              return console.log(error);
            }
            // console.log(data);
          
            // Then split it by commas (to make it more readable)
            const dataArr = data.split(",");
          
            // We will then re-display the content as an array for later use.
            // console.log(dataArr);
            action = dataArr[0];
            value = dataArr[1];
            spotifyThis();
          });
          
    }