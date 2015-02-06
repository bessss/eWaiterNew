var MyApp = window.MyApp = { };

$(document).ready(
  $(function() {
    MyApp.app = new DevExpress.framework.html.HtmlApplication({
      namespace: MyApp,
      layoutSet: DevExpress.framework.html.layoutSets['simple'],
      commandMapping: {
       "android-simple-toolbar": {
          commands: [
          {
            id: "add",
            location: "before"
          }]
        }
      }
    });

    MyApp.app.router.register(":view", { view: "home" });
    MyApp.app.navigate();

    MyApp.app.on("viewShown", function(args) {
      if ( args.direction == 'backward' )
      {
        if ( DD.modeRating == true )
        {
          //Если меняли рейтинг
          MR.setItems();
          DD.modeRating = false;
        }
      }
      
      if ( args.direction == 'forward' )
      {
        $('#stars').rating({fx: 'half',image: 'images/stars.png',loader: 'images/ajax-loader.gif',width: 20,url: 'http://admin.ewaiter.info/includes/insertVoise.php'});
        RD.setRewiewsArea();
      }

      //console.log(args);
    });

  })
);

selectedIndex = ko.observable(0);
menuVisible = ko.observable(false);