require("dotenv").config();

const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
const axios = require('axios');

const argv = process.argv;

switch (action) {
    case "concert":
      concert();
      break;
    
    case "spotify":
      spotify();
      break;
    
    case "movie":
      movie();
      break;
    
    case "doWhatItSays":
      doWhatItSays();
      break;
    }

    function concert(){

    }

    function spotify(){

    }

    function movie(){

    }

    function doWhatItSays(){
        
    }