var module = angular.module('silkRoad', []);

module.controller('silkRoadController', ["$scope", function($scope) {

  $scope.systems = ['systemA', 'systemB', 'systemC'];
  $scope.stations = ['stationA', 'stationB', 'stationC'];
  $scope.commodities = ['commodityA', 'commodityB', 'commodityC'];

  $scope.currentStop = {};

  $scope.stopNo = 1;
  $scope.noOfStops = 3;
  
  $scope.nextSystem = $scope.systems[$scope.stopNo-1];

  $scope.stops = [];

  $scope.prevStop = function() {
    if($scope.stopNo > 1) {
      $scope.stopNo -= 1;
    } else {
      $scope.stopNo = $scope.noOfStops;
    }
    $scope.currentStop = $scope.stops[$scope.stopNo-1];
  };

  $scope.nextStop = function() {
    if($scope.stopNo < $scope.noOfStops) {
      $scope.stopNo += 1;
    } else {
      $scope.stopNo = 1;
    }
    $scope.currentStop = $scope.stops[$scope.stopNo-1];
  };

  $scope.getStops = function() {
    return $scope.stops;
  };

  /**
    * List of stops
    1*
    * {system, station, buy, sell, prevStop, nextStop}
    **/

  $scope.stop1 = {
    system: $scope.systems[0], 
    station: $scope.stations[0], 
    buy: $scope.commodities[1], 
    sell: $scope.commodities[0],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop2 = {
    system: $scope.systems[1], 
    station: $scope.stations[1], 
    buy: $scope.commodities[2], 
    sell: $scope.commodities[1],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop3 = {
    system: $scope.systems[2], 
    station: $scope.stations[2], 
    buy: $scope.commodities[0], 
    sell: $scope.commodities[2],
    prevStop: {},
    nextStop: {}
  };

  $scope.stops = [$scope.stop1, $scope.stop2, $scope.stop3];
  
  $scope.stop1.prevStop = $scope.stops[2];
  $scope.stop1.nextStop = $scope.stops[1];
  $scope.stop2.prevStop = $scope.stops[0];
  $scope.stop2.nextStop = $scope.stops[2];
  $scope.stop3.prevStop = $scope.stops[1];
  $scope.stop3.nextStop = $scope.stops[0];

  $scope.currentStop = $scope.stops[0];

}]);