const fs = require("fs"); // Step 1: Import the fs module

const filePath = process.argv[2]; // Get the file path from the first command-line argument

// Step 2: Read the file asynchronously
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    // Handle the error if one occurred
    console.error(err);
    return;
  }

  // Step 3: Count the number of newlines
  const numberOfNewlines = data.split("\n").length - 1;

  // Step 4: Print the number of newlines to the console
  console.log(numberOfNewlines);
});
