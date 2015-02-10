/*Получение, парсинг данных маркеров*/
function WorkOnRestaurants()
{
  //Период обновления списка маркеров
  this.updateTimeMarkers = null;
  this.markers = new Array();

  this.getMarkers = getMarkers;
  this.parseDataMarkers = parseDataMarkers;
}

function parseDataMarkers(temp)
{
  CD.timeToUpdate = temp['updateTimeUser'];
  this.updateTimeMarkers = temp['updateTimeRest'];
  this.markers = temp['restaurant'];
  SRN.searchRest(this.markers);
  CD.intervalCoordinates();
}

function getMarkers()
{
  LP.createLoadPanel('Получение маркеров');
  $.ajax({
    type: "POST",
    url: "http://admin.ewaiter.info/outputs/outputRestaurantCoordinates.php",
    data: "name=John&location=Boston",
    error: function(){
      LP.deleteLoadPanel();
    },
    success: function(msg){
      if ( msg != '' )
      {
        var temp = JSON.parse(msg);
        LP.deleteLoadPanel();
        WOR.parseDataMarkers(temp);
        //obj.updateUser = temp['updateTimeUser'];
        //selectRest.updateTimeRest = temp['updateTimeRest'];
        //obj.setMarkers( temp["restaurant"] );
        //obj.setPosition(true);
        //if ( auto == undefined )
        //{
          //Если это не автоматическое обновление
          //restClose.searchRest( temp["restaurant"] );
          //Обновление местоположения пользователя --> TIMER
          //obj.updateUserPosition();
          //TODO для тестирования CC.setChangeCoordTimer();
          //Обновление списка ресторанов --> TIMER
          //selectRest.updateRest();
          //Поиск ближайших ресторанов --> TIMER
          //restClose.intervalSearch();
        //}
      }
      else
      {
        //LP.createToastMessage('Рестораны в базе отсутствуют',3000,1);
      }
    }
  });
}

var WOR = new WorkOnRestaurants();