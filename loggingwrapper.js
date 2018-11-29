var wrapLog = function (callback, name) {
  if (name === "area") {
    return function(x, y) {
    console.log("area(" + x + ", " + y + ") => " + callback(x,y));
    }
  } else if (name === "volume") {
    return function(x, y, z) {
    console.log("volume(" + x + ", " + y + ", " + z + ") => " + callback(x,y,z));
    }
  } else {
    console.log("Please provide correct inputs.")
  }
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24