var module = angular.module('silkRoad', []);

module.controller('silkRoadController', ["$scope", function($scope) {

  $scope.systems = ['Harm', 'Arjung', 'Scirth', 'Kaliki', 'Bommatsuri', 'Feng Tanga', 'HIP 9989', 'Popocassa', 'Lileni', 'Xi Wang Mu', 'Dheneb', 'HIP 7916', 'HIP 8830', 'HIP 9753', 'HR 827', 'Badbadzist', 'Nidayiman'];
  $scope.stations = ['Gentil Hub', 'Hiya Orbital', 'Lichtenberg City', 'Oren City', 'Austin Market', 'Waever Port', 'Capek Orbital', 'Houtman Dock', 'Wachmann Vision', 'Goddard Dock', 'Henson Gateway', 'Giunta Gateway', 'Gould Ring', 'Harawi Enterprise', 'Naddoddur Hub', 'Fabian Term', 'Kagawa Vision'];
  $scope.commodities = ['Advanced Catalysers', 'Perf. Enh./Cons. Tech.', 'Gallium', 'Prog. Cells/Perf. Enh.', 'Tobacco', 'Res. Sep./Auto Fab.', 'Crop Harv./Marine Eq.', 'Tobacco', 'Consumer Tech', 'Palladium', 'Performance Enh.', 'Crop Harvesters', 'Tobacco', 'Imp. Slaves/Gallite', 'Beryllium', 'Cons. Tech./Prog. Cell', 'Palladium/Gold'];

  $scope.currentStop = {};

  $scope.stopNo = 1;
  $scope.noOfStops = 17;
  
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
    *
    * {system, station, sell, buy, prevStop, nextStop}
    **/

  for(var i=0;i<$scope.noOfStops;i++) {
    if(i===0) {
      i2 = $scope.noOfStops-1;
    } else {
      i2 = i-1;
    }
    var stop = {
      system: $scope.systems[i],
      station: $scope.stations[i],
      sell: $scope.commodities[i2],
      buy: $scope.commodities[i],
      prevStop: {},
      nextStop: {}
    };
    
    $scope.stops.push(stop);
    
  }

  for(var i=0;i<$scope.noOfStops;i++) {

    if(i===0) {
      $scope.stops[i].prevStop = $scope.stops[16];
      $scope.stops[i].nextStop = $scope.stops[i+1];
    } else if(i===16) {
      $scope.stops[i].prevStop = $scope.stops[i-1];
      $scope.stops[i].nextStop = $scope.stops[0];
    } else {
      $scope.stops[i].prevStop = $scope.stops[i-1];
      $scope.stops[i].nextStop = $scope.stops[i+1];
    }

  }

  $scope.currentStop = $scope.stops[0];

}]);