const fs = require('fs');
const path = require('path');
const version = "2.0.0";

/*Authors: Ray Voice and Anna Voice*/
let authorName = "No author name provided!";
let softwareVersionNumber = "No version number provided!";
let generalLogFile = path.join(".", "logs", "defaultFile.txt");

module.exports = {
  write: function (log) {
    // hard-logging aka logging in both log file an d Terminal
    console.log(log);
    this.shadow(log);
  },
  shadow: function (log) {
    // hard-logging without terminal display
    const freshDate = new Date();
    fs.appendFileSync(generalLogFile, `${log} --${freshDate.toISOString()}\n`);
  },
  init: function (author, versionNumber, logFile) {
    // Initialize hardLog with the following details before using hardlog
    authorName = author;
    //Can only save log files in the current dir
    generalLogFile = path.basename(logFile);
    softwareVersionNumber = versionNumber;
    
    if (generalLogFile == "") {
      this.write("Log files needs to have a valid name!");
      process.exit();
    }

    if (path.dirname(logFile) != ".") {
      this.write("Log files are only allowed in the root directory of your project!");
      process.exit();
    }

    this.write(`Initialized HardLog v${version} with the following details:
	    Author: ${authorName}
	    Version: ${softwareVersionNumber}
	    HardLog file: ${generalLogFile}`);
  }
}

