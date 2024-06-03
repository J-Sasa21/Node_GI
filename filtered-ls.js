const fs = require("fs"); // Step 1: Import the fs module
const path = require("path"); // Step 1: Import the path module

const directoryPath = process.argv[2]; // Step 2: Get the directory path from the first command-line argument
const fileExtension = "." + process.argv[3]; // Step 2: Get the file extension from the second command-line argument and add a dot

// Step 3: Read the directory asynchronously
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    // Handle the error if one occurred
    console.error(err);
    return;
  }

  // Step 4: Filter the files by the specified extension
  const filteredFiles = files.filter(
    (file) => path.extname(file) === fileExtension
  );

  // Step 5: Print each filtered file on a new line
  filteredFiles.forEach((file) => console.log(file));
});
