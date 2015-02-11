function map()
{
  this.options = {
    zoom: 13,
    width: '100%',
    height: '100%',
    provider: 'bing',
    type: 'roadmap'
    //center: "40.749825, -73.987963"
  }

  this.createMap = createMap;
}

function createMap()
{
  Map.options.center = CD.curentCoordinates['x'] + ',' + CD.curentCoordinates['y'];
  $('#mapDiv').dxMap( Map.options );
}

var Map = new map();