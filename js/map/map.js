function map()
{
  this.options = {
    zoom: 15,
    width: '100%',
    height: '100%',
    provider: 'google',
    mapType: "satellite",
    markers: new Array(),
    autoAdjust: false
    //center: "40.749825, -73.987963"
  }

  this.createMap = createMap;
  this.createMarkers = createMarkers;
}

function createMarkers()
{
  Map.options.markers = new Array();
  for ( var i = 0; i < WOR.markers.length; ++i )
  {
    Map.options.markers.push({
      title: WOR.markers[i]['shotName'],
      location: WOR.markers[i]['latitude'] + ',' + WOR.markers[i]['longitude'],
      iconSrc: 'http://ewaiter.info/application/images/' + WOR.markers[i]['cssName'] + '_theme_logo_32x32.png',
      tooltip: '<table>\
                  <tr>\
                    <td style="padding-left: 10px;font-size: 14px;"><div style="text-decoration: underline;">' + WOR.markers[i]['shotName'] + '</div><div style="font-size: 12px;">' + WOR.markers[i]['adress'] + '</div><div style="font-size: 12px;">' + WOR.markers[i]['contact'] + '</div></td>\
                  </tr>\
                </table>'
      //onClick: function () { DevExpress.ui.notify("Marker 'C' clicked!", "info", 1000); }
    });
  }
}

function createMap()
{
  Map.options.center = CD.curentCoordinates['x'] + ',' + CD.curentCoordinates['y'];
  Map.createMarkers();
  $('#mapDiv').dxMap( Map.options );
}

var Map = new map();