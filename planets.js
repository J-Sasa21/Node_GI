const fs = require("fs");
const path = require("path");

// Read the planets.txt file
const filePath = path.join(__dirname, "planets.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Print the contents to the console
  console.log(data);
});
