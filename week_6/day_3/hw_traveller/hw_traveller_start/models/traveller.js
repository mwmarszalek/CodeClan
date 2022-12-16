const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(startLocation) {
  return this.journeys.map((journey) => {
    return journey.startLocation
  })
};

Traveller.prototype.getJourneyEndLocations = function (endLocation) {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total,journey) => {
    return total + journey.distance;
  },0);
};
// the below is failing the test!
Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueModesOfTransport = this.journeys
    .map((journey) => journey.transport);
    const cleanModeOfTransport = new Set(uniqueModesOfTransport);
      return cleanModeOfTransport
};



module.exports = Traveller;
