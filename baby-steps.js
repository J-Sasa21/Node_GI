// baby-steps.js

// Access the command-line arguments
const args = process.argv;

// Initialize the sum to 0
let sum = 0;

// Loop through the arguments starting from index 2
for (let i = 2; i < args.length; i++) {
  // Convert each argument to a number and add it to the sum
  sum += Number(args[i]);
}

// Print the sum to the console
console.log(sum);
