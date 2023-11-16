const fs = require('fs');
const csv = require('csv-parser');

function readCSVFile(csvFilePath) {
  return new Promise((resolve, reject) => {
    const csvDataArray = [];

    const stream = fs
      .createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (match) => {
        csvDataArray.push(match);
      })
      .on('end', () => {
        resolve(csvDataArray);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

module.exports = readCSVFile;
