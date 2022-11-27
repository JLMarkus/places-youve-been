function VactionLog() {
  this.places = {};
  this.currentId = 0;
}

VactionLog.prototype.addPlace = function (Place) {
  Place.id = this.assignId();
  this.places[Place.id] = Place;
};


VactionLog.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

function Place(location, landmarks, timeOfYear) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

let paris = new Place('Paris', ['Eiffel Tower', 'Louvre Museum', 'Arc de Triomphe'], 'Fall');

let hawaii = new Place('Hawaii', ['North Shore', 'Pearl Harbor National Museum', 'Iolani Palace'], 'Summer');

let tokyo = new Place('Tokyo', ['Tokyo Tower', 'Sensō - ji', 'Yoyogi Park'], 'Spring');



console.log()