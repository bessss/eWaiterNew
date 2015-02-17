var MyApp = window.MyApp = { };
function onDeviceReady() {
  $(function() {
    MyApp.app = new DevExpress.framework.html.HtmlApplication({
      namespace: MyApp,
      layoutSet: DevExpress.framework.html.layoutSets['slideout'],
      navigation: LN.items
    });

    MyApp.app.router.register(":view", { view: "home" });
    MyApp.app.navigate();
    CD.getCurentCoordinates();

    MyApp.app.on("viewHidden", function(args) {
      switch ( args.viewInfo.viewName )
      {
        case 'map':
        {
          Map.createMap();
          break;
        }
        case 'noRestaurants':
        {
          NR.clearNRInterval();
          break;
        }
      }
    });

    MyApp.app.on("viewShown", function(args) {
      WOLM.entryWOLM(args);
      MyApp.curentView = args.viewInfo.viewName;
      switch ( args.viewInfo.viewName )
      {
        case 'map':
        {
          Map.createMap();
          break;
        }
        case 'noRestaurants':
        {
          NR.setNRInterval();
          break;
        }
        default:
        {
          if( args.viewInfo.viewName.indexOf('menuDetail') != -1 )
          {
            $('#stars').rating({fx: 'half',image: 'images/stars.png',loader: 'images/ajax-loader.gif',width: 20,url: 'http://admin.ewaiter.info/includes/insertVoise.php'});
            RD.setRewiewsArea();
          }
          break;
        }
      }
    });

  })
}

$(document).ready(function() {
  window.isphone = false;
  if(document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1)
  {
    window.isphone = true;
  }

  if( window.isphone )
  {
    document.addEventListener("deviceready", onDeviceReady, false);
  } 
  else
  {
    onDeviceReady();
  }
});