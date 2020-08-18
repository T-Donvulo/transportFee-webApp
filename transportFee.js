module.exports = function (shift) {
    //var shift = " ";
    //console.log(shift)
    switch (shift) {
      case "morning":
        return "R20";
  
      case "afternoon":
        return "R10";
  
      default:
        return "free";
    }
  }