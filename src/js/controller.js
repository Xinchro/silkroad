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
    1*
    * {system, station, sell, buy, prevStop, nextStop}
    **/

  $scope.stop1 = {
    system: $scope.systems[0],
    station: $scope.stations[0],
    sell: $scope.commodities[16],
    buy: $scope.commodities[0],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop2 = {
    system: $scope.systems[1],
    station: $scope.stations[1],
    sell: $scope.commodities[0],
    buy: $scope.commodities[1],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop3 = {
    system: $scope.systems[2],
    station: $scope.stations[2],
    sell: $scope.commodities[1],
    buy: $scope.commodities[2],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop4 = {
    system: $scope.systems[3],
    station: $scope.stations[3],
    sell: $scope.commodities[2],
    buy: $scope.commodities[3],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop5 = {
    system: $scope.systems[4],
    station: $scope.stations[4],
    sell: $scope.commodities[3],
    buy: $scope.commodities[4],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop6 = {
    system: $scope.systems[5],
    station: $scope.stations[5],
    sell: $scope.commodities[4],
    buy: $scope.commodities[5],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop7 = {
    system: $scope.systems[6],
    station: $scope.stations[6],
    sell: $scope.commodities[5],
    buy: $scope.commodities[6],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop8 = {
    system: $scope.systems[7],
    station: $scope.stations[7],
    sell: $scope.commodities[6],
    buy: $scope.commodities[7],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop9 = {
    system: $scope.systems[8],
    station: $scope.stations[8],
    sell: $scope.commodities[7],
    buy: $scope.commodities[8],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop10 = {
    system: $scope.systems[9],
    station: $scope.stations[9],
    sell: $scope.commodities[8],
    buy: $scope.commodities[9],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop11 = {
    system: $scope.systems[10],
    station: $scope.stations[10],
    sell: $scope.commodities[9],
    buy: $scope.commodities[10],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop12 = {
    system: $scope.systems[11],
    station: $scope.stations[11],
    sell: $scope.commodities[10],
    buy: $scope.commodities[11],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop13 = {
    system: $scope.systems[12],
    station: $scope.stations[12],
    sell: $scope.commodities[11],
    buy: $scope.commodities[12],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop14 = {
    system: $scope.systems[13],
    station: $scope.stations[13],
    sell: $scope.commodities[12],
    buy: $scope.commodities[13],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop15 = {
    system: $scope.systems[14],
    station: $scope.stations[14],
    sell: $scope.commodities[13],
    buy: $scope.commodities[14],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop16 = {
    system: $scope.systems[15],
    station: $scope.stations[15],
    sell: $scope.commodities[14],
    buy: $scope.commodities[15],
    prevStop: {},
    nextStop: {}
  };
  $scope.stop17 = {
    system: $scope.systems[16],
    station: $scope.stations[16],
    sell: $scope.commodities[15],
    buy: $scope.commodities[16],
    prevStop: {},
    nextStop: {}
  };

  $scope.stops = [$scope.stop1, $scope.stop2, $scope.stop3, $scope.stop4, $scope.stop5, $scope.stop6, $scope.stop7, $scope.stop8, $scope.stop9, $scope.stop10, $scope.stop11, $scope.stop12, $scope.stop13, $scope.stop14, $scope.stop15, $scope.stop16, $scope.stop17];
  
  $scope.stop1.prevStop = $scope.stops[16];
  $scope.stop1.nextStop = $scope.stops[1];
  $scope.stop2.prevStop = $scope.stops[0];
  $scope.stop2.nextStop = $scope.stops[2];
  $scope.stop3.prevStop = $scope.stops[1];
  $scope.stop3.nextStop = $scope.stops[3];
  $scope.stop4.prevStop = $scope.stops[2];
  $scope.stop4.nextStop = $scope.stops[4];
  $scope.stop5.prevStop = $scope.stops[3];
  $scope.stop5.nextStop = $scope.stops[5];
  $scope.stop6.prevStop = $scope.stops[4];
  $scope.stop6.nextStop = $scope.stops[6];
  $scope.stop7.prevStop = $scope.stops[5];
  $scope.stop7.nextStop = $scope.stops[7];
  $scope.stop8.prevStop = $scope.stops[6];
  $scope.stop8.nextStop = $scope.stops[8];
  $scope.stop9.prevStop = $scope.stops[7];
  $scope.stop9.nextStop = $scope.stops[9];
  $scope.stop10.prevStop = $scope.stops[8];
  $scope.stop10.nextStop = $scope.stops[10];
  $scope.stop11.prevStop = $scope.stops[9];
  $scope.stop11.nextStop = $scope.stops[11];
  $scope.stop12.prevStop = $scope.stops[10];
  $scope.stop12.nextStop = $scope.stops[12];
  $scope.stop13.prevStop = $scope.stops[11];
  $scope.stop13.nextStop = $scope.stops[13];
  $scope.stop14.prevStop = $scope.stops[12];
  $scope.stop14.nextStop = $scope.stops[14];
  $scope.stop15.prevStop = $scope.stops[13];
  $scope.stop15.nextStop = $scope.stops[15];
  $scope.stop16.prevStop = $scope.stops[14];
  $scope.stop16.nextStop = $scope.stops[16];
  $scope.stop17.prevStop = $scope.stops[15];
  $scope.stop17.nextStop = $scope.stops[0];

  $scope.currentStop = $scope.stops[0];

}]);