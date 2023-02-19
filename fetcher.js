const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localfilePath = process.argv[3];
request(url, (error, response, body) => {
  if (error) {
    console.log('Oops! Something went wrong:', error);
  }
  fs.writeFile(localfilePath, body, function(error) {
    if (error) {
      console.log('We can\'t write to localfilePath:' , error);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localfilePath}`);
    }
  });
});

