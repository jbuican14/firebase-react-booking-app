require("regenerator-runtime/runtime");
// const functions = require("firebase-functions");
const builtFunctions = require("./build");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
Object.keys(builtFunctions).forEach((functionName) => {
  exports[functionName] = builtFunctions[functionName];
});
