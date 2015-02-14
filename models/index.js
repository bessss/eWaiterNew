var MyApp = window.MyApp = { };
$(document).ready(
  $(function() {
    MyApp.app = new DevExpress.framework.html.HtmlApplication({
      namespace: MyApp,
      layoutSet: DevExpress.framework.html.layoutSets['slideout'],
      navigation: LN.items
    });

    MyApp.app.router.register(":view", { view: "home" });
    MyApp.app.navigate();

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
          $('.dx-button-back-arrow').css('display','none');
          break;
        }
        /*case 'home':
        {
          if ( args.direction == 'backward' )
          {
            MR.setItems();
          }

          if ( DD.modeRating == true )
          {
            //Если меняли рейтинг
            MR.setItems();
            DD.modeRating = false;
          }
          break;
        }*/
        /*default:
        {
          if( args.viewInfo.viewName.indexOf('menuDetail') != -1 )
          {
            $('#stars').rating({fx: 'half',image: 'images/stars.png',loader: 'images/ajax-loader.gif',width: 20,url: 'http://admin.ewaiter.info/includes/insertVoise.php'});
            RD.setRewiewsArea();
          }
          break;
        }*/
      }
    });

  })
);