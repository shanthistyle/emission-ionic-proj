angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Trips', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var trips = [
    { id: 0, name: 'lala1' },
    { id: 1, name: 'lala2' },
    { id: 2, name: 'lala3' },
    { id: 3, name: 'lala4' }
  ];

  return {
    all: function() {
      return trips;
    },
    get: function(tripId) {
      // Simple index lookup
      return trips[tripId];
    }
  }
});
