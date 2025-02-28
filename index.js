// Function that returns the string in all uppercase
function shout(string) {
    return string.toUpperCase();
  }
  
  // Function that returns the string in all lowercase
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // Function that logs the string in uppercase
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Function that logs the string in lowercase
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Function that returns different responses based on the string input
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  // Export functions (if required for testing)
  module.exports = {
    shout,
    whisper,
    logShout,
    logWhisper,
    sayHiToHeadphonedRoommate,
  };
  