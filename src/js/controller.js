var module = angular.module('silkRoad', []);

module.controller('silkRoadController', ["$scope", function($scope) {

  $scope.systems = ['systemA', 'systemB', 'systemC'];
  $scope.stations = ['stationA', 'stationB', 'stationC'];
  $scope.commodities = ['commodityA', 'commodityB', 'commodityC'];

  $scope.stop = {};
  $scope.stops = [];
  $scope.prevStop;
  $scope.currentStop;
  $scope.nextStop;

  $scope.stopNo = 1;
  $scope.noOfStops = 3;
  
  $scope.currentSystem = $scope.systems[$scope.stopNo-1];
  $scope.currentStation = $scope.stations[$scope.stopNo-1];
  $scope.currentBuy = $scope.commodities[$scope.stopNo-1];
  $scope.currentSell = $scope.commodities[$scope.stopNo-1+1];
  
  $scope.nextSystem = $scope.systems[$scope.stopNo-1+1];

  $scope.prevStop = function() {
    if($scope.stopNo > 1) {
      $scope.stopNo -= 1;
    } else {
      $scope.stopNo = $scope.noOfStops;
    }
    $scope.currentSystem = $scope.systems[$scope.stopNo-1];
    $scope.nextSystem = $scope.systems[$scope.stopNo-1+1];
    console.log("butts " + $scope.stopNo);
  };

  $scope.nextStop = function() {
    if($scope.stopNo < $scope.noOfStops) {
      $scope.stopNo += 1;
    } else {
      $scope.stopNo = 1;
    }
    $scope.currentSystem = $scope.systems[$scope.stopNo-1];
    $scope.nextSystem = $scope.systems[$scope.stopNo-1+1];
    console.log("butts2 " + $scope.stopNo);
  };

}]);