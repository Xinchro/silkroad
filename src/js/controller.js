var module = angular.module('silkRoad', []);

module.controller('silkRoadController', ["$scope", function($scope) {

  // fill all the arrays with their respective data
  $scope.systems = ['Harm', 'Arjung', 'Scirth', 'Kaliki', 'Bommatsuri', 'Feng Tanga', 'HIP 9989', 'Popocassa', 'Lileni', 'Xi Wang Mu', 'Dheneb', 'HIP 7916', 'HIP 8830', 'HIP 9753', 'HR 827', 'Badbadzist', 'Nidayiman'];
  $scope.stations = ['Gentil Hub', 'Hiya Orbital', 'Lichtenberg City', 'Oren City', 'Austin Market', 'Waever Port', 'Capek Orbital', 'Houtman Dock', 'Wachmann Vision', 'Goddard Dock', 'Henson Gateway', 'Giunta Gateway', 'Gould Ring', 'Harawi Enterprise', 'Naddoddur Hub', 'Fabian Term', 'Kagawa Vision'];
  $scope.commodities = ['Advanced Catalysers', 'Perf. Enh./Cons. Tech.', 'Gallium', 'Prog. Cells/Perf. Enh.', 'Tobacco', 'Res. Sep./Auto Fab.', 'Crop Harv./Marine Eq.', 'Tobacco', 'Consumer Tech', 'Palladium', 'Performance Enh.', 'Crop Harvesters', 'Tobacco', 'Imp. Slaves/Gallite', 'Beryllium', 'Cons. Tech./Prog. Cell', 'Palladium/Gold'];
  $scope.projProfsPerItem = ['796', '970', '826', '1013', '787', '1003', '763', '1154', '1289', '1701', '1203', '743', '1125', '1053', '1134', '1371', '1573'];
  $scope.dists = ['19.04', '26.29', '22.02', '30.19', '15.32', '28.68', '27.03', '42.26', '41.93', '23.66', '18.7', '13.53', '26.55', '36.33', '30.35', '32.36', '38.99'];
  $scope.factions = ['Empire', 'Independent', 'Empire', 'Empire', 'Empire', 'Independent', 'Independent', 'Empire', 'Independent', 'Independent', 'Independent', 'Empire', 'Empire', 'Independent', 'Empire', 'Empire', 'Empire'];

  $scope.currentStop = {};

  $scope.stopNo = 1;
  $scope.noOfStops = 17;

  $scope.stops = [];

  /**
   * Decrement the stop number
   **/
  $scope.prevStop = function() {
    if($scope.stopNo > 1) {
      $scope.stopNo -= 1;
    } else {
      $scope.stopNo = $scope.noOfStops;
    }
    $scope.updateCurrentStop();
  };

  /**
   * Increment the stop number
   **/
  $scope.nextStop = function() {
    if($scope.stopNo < $scope.noOfStops) {
      $scope.stopNo += 1;
    } else {
      $scope.stopNo = 1;
    }
    $scope.updateCurrentStop();
  };

  /**
   * Update the current stop
   **/
  $scope.updateCurrentStop = function() {
    $scope.currentStop = $scope.stops[$scope.stopNo-1];
  }

  /**
   * Get the stops array
   **/   
  $scope.getStops = function() {
    return $scope.stops;
  };

  /**
   * Pick a new stop to act as current
   * @param stop - a Stop
   **/   
  $scope.pickStop = function(stop) {
    $scope.currentStop = stop;
    $scope.stopNo = $scope.stops.indexOf(stop) + 1;
  };

  /**
    * List of stops
    *
    * Stop struct: {system, station, sell, buy, projectedProfitPerItem, faction, prevStop, distFromPrev, nextStop, distToNext}
    **/

  // Create the stops and add them to the array
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
      projectedProfitPerItem: $scope.projProfsPerItem[i],
      faction: $scope.factions[i],
      prevStop: {},
      distFromPrev: $scope.dists[i2],
      nextStop: {},
      distToNext: $scope.dists[i]
    };
    
    $scope.stops.push(stop);

  }

  // Link the stops to one another,
  // including linking the first and last stops
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

  // Set the first stop as the current stop
  $scope.currentStop = $scope.stops[0];

}]);