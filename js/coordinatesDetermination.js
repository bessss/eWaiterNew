/*Определение координат пользователя*/
function coordinatesDetermination()
{
  this.curentCoordinates = {'x':0,y:0,'accuracy':0}
  //Период обновления координат пользователя
  this.timeToUpdate = null;

  this.getCurentCoordinates = getCurentCoordinates;
  //this.getCurentCoordinates();
}

function getCurentCoordinates()
{
  var obj = this;
  navigator.geolocation.getCurrentPosition(function(position) {
    obj.curentCoordinates['x'] = position.coords.latitude;
    obj.curentCoordinates['y'] = position.coords.longitude;
    obj.curentCoordinates['accuracy'] = position.coords.accuracy;
    WOR.getMarkers();
  },function(){},{ maximumAge: 400, timeout: 10000, enableHighAccuracy: true });
}

var CD = new coordinatesDetermination();

$(document).ready(function(){
  CD.getCurentCoordinates();
});