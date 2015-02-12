/*Поиск ресторанов, находящихся рядом*/
function SearchRestaurantsNear()
{
  this.store = new Array();
  this.nearStoreRestaurant = new Array();
  this.countNear = null;

  this.calcDist = calcDist;
  this.searchRest = searchRest;
  this.intervalSearchRest = intervalSearchRest;
  this.intervalSearch = intervalSearch;
  this.cyclicSearch = cyclicSearch;
}

function intervalSearch()
{
  setInterval(function(){
    SRN.intervalSearchRest();
  },3000);//selectRest.updateTimeRest);
}

function calcDist(lat1, long1, lat2, long2)
{
  //радиус Земли
  var R = 6372795;
  //перевод коордитат в радианы
  lat1 *= Math.PI / 180;
  lat2 *= Math.PI / 180;
  long1 *= Math.PI / 180;
  long2 *= Math.PI / 180;
  //вычисление косинусов и синусов широт и разницы долгот
  var cl1 = Math.cos(lat1);
  var cl2 = Math.cos(lat2);
  var sl1 = Math.sin(lat1);
  var sl2 = Math.sin(lat2);
  var delta = long2 - long1;
  var cdelta = Math.cos(delta);
  var sdelta = Math.sin(delta);
  //вычисления длины большого круга
  var y = Math.sqrt(Math.pow(cl2 * sdelta, 2) + Math.pow(cl1 * sl2 - sl1 * cl2 * cdelta, 2));
  var x = sl1 * sl2 + cl1 * cl2 * cdelta;
  var ad = Math.atan2(y, x);
  var dist = ad * R; //расстояние между двумя координатами в метрах
  return dist;
}

function cyclicSearch()
{
  var tempArray = new Array();

  for ( var i = 0; i < SRN.store.length; ++i )
  {
    var tempDist = this.calcDist( CD.curentCoordinates['x'], CD.curentCoordinates['y'], this.store[i]['latitude'], this.store[i]['longitude'] );
    if ( ( parseFloat(this.store[i]['accuracy']) + CD.curentCoordinates['accuracy'] ) >= tempDist )
    {
      tempArray.push( this.store[i] );
    }
  }

  return tempArray;
}

function intervalSearchRest()
{
  var obj = this;
  var tempArray = new Array();

  tempArray = SRN.cyclicSearch();

  if ( JSON.stringify(tempArray) != JSON.stringify(SRN.nearStoreRestaurant) )
  {
    SRN.nearStoreRestaurant = tempArray;
    console.log('Зафиксировано изменение: ' + tempArray.length);
    //Еcли произошло изменеиние колличества ресторанов, проверяем наличие выбранного ресторана
    if ( SR.curentRestaurant.idRestaurant != undefined )
    {
      var tempCurentR = false;
      //Если был выбор ресторана ищем в ближайщих текущий
      for ( var i = 0; i < SRN.nearStoreRestaurant.length; ++i )
      {
        if ( SRN.nearStoreRestaurant[0]['idRestaurant'] == SR.curentRestaurant )
        {
          tempCurentR = true;
        }
      }
      
      if ( tempCurentR == false )
      {
        console.log('Текущего нашего ресторана НЕТ рядом !');
        //Текущего нашего ресторана НЕТ рядом !
        SR.selectionRestaurant();
      }
    }
    else
    {
      //Если выбора ресторана не было, то показываем панель выбора
      SR.selectionRestaurant();
    }
  }
}

function searchRest(markersStore)
{
  var tempArray = new Array();
  if ( markersStore != undefined )
  {
    this.store = markersStore;
    var tempCount = markersStore.length;
  }
  else
  {
    var tempCount = this.store.length;
  }

  tempArray = SRN.cyclicSearch();

  this.countNear = tempArray.length;
  
  if ( this.countNear == 0 )
  {
  
  }
  
  this.nearStoreRestaurant = tempArray;
  SR.selectionRestaurant();

  SRN.intervalSearch();
}

var SRN = new SearchRestaurantsNear();
