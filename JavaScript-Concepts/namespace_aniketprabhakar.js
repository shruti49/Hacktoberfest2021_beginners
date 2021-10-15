// AUTHOR: Aniket Prabhakar
// JavaScript Concept: Namaspace
// GITHUB: https://github.com/aniketprabhakar

// If someone adds to the page you are working on it can lead to conflicts so to prevent these conflicts we can give our code our own namespace.
// we will demonstrate by using a showName function

if (typeof MY == "undefined") {
  MY = new Object();
  MY.CUSTOM = new Object();
}

MY.CUSTOM.namespace = function() {
  function showName(args) {
    document.write("<p><strong>Name:</strong> " + args.name + "<br />");
    document.write("<strong>Team:</strong> " + args.team + "<br />");
    if (typeof args.position === "string") {
      document.write("<strong>Position:</strong> " + args.position + "<br />");
    }
    if (typeof args.average === "number") {
      document.write("<strong>Average:</strong> " + args.average + "<br />");
    }
    if (typeof args.runs === "number") {
      document.write("<strong>Home Runs:</strong> " + args.runs + "<br />");
    }
    if (typeof args.hundreds === "number") {
      document.write("<strong>Runs Batted In:</strong> " + args.hundreds + "</p>");
    }
  }

  // we will take example of a cricketer to show show some stats and how to use namespace
  
  showName({
    name: "Virat",
    team: "India",
    position: "3rd",
    average: 50,
    runs: 8000,
    hundreds: 50
  });
}
MY.CUSTOM.namespace();

// giving own namespace
