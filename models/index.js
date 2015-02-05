  var MyApp = window.MyApp = { };
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
  });

  selectedIndex = ko.observable(0);
  menuVisible = ko.observable(false);