const csvtojson = require('csvtojson');
const fs = require('fs');

const csvFilePath1 = './src/data/deliveries.csv';
const csvFilePath2 = './src/data/matches.csv';

const jsonFilePath1 = './src/data/deliveriesInJson.json';
const jsonFilePath2 = './src/data/matchesInJson.json';

// Function to convert CSV to JSON and write to file
function convertCsvToJson(csvFilePath, jsonFilePath) {
  csvtojson()
    .fromFile(csvFilePath)
    .then((jsonArrayObj) => {
      const jsonString = JSON.stringify(jsonArrayObj, null, 2);

      fs.writeFile(jsonFilePath, jsonString, 'utf8', (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
        } else {
          console.log(
            'JSON file has been written successfully:',
            jsonFilePath
          );
        }
      });
    })
    .catch((err) => {
      console.error('Error converting CSV to JSON:', err);
    });
}

convertCsvToJson(csvFilePath1, jsonFilePath1);
convertCsvToJson(csvFilePath2, jsonFilePath2);
