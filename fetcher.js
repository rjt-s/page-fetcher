// Page Downloader App

const url = process.argv[2];
const path = process.argv[3];

const request = require('request');
const fs = require('fs');

request(url, function (error, response, body) {
  if (error) {
    console.error('error:', error);
  }
  fs.writeFile('index.html', body, function (err) {
    if (err) throw err;
    var stats = fs.statSync("./index.html")
    var fileSizeInBytes = stats.size;
    console.log(`${fileSizeInBytes} bytes saved to ${path}`);
  }); // Print the HTML for the Google homepage.
});