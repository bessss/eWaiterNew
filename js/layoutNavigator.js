function layoutNavigator()
{
  this.curentLayout = 0;
  this.items = [
    { text: 'Название ресторана', icon: 'plus', menuTemplate: 'restaurantName' },
    { text: 'Меню ресторана', icon: 'plus', menuTemplate: 'restaurantMenu' },
    { text: 'Другой ресторан', icon: 'plus', menuTemplate: 'anotherRestaurant' },
    { text: 'Где доступен сервис', icon: 'plus', menuTemplate: 'map' },
    { text: 'Как пользоваться', icon: 'plus', menuTemplate: 'howToUse' }
  ]
  this.setLayout = setLayout;
}

function setLayout(e)
{
  switch ( e.itemData.menuTemplate )
  {
    case 'home':
    {
      //Меню ресторана
      LN.curentLayout = 1;
      MyApp.app.navigate('home');
      break;
    }
    case 'anotherRestaurant':
    {
      //Выбор другого ресторана
      LN.curentLayout = 2;
      SRP.createPanel();
      break;
    }
    case 'map':
    {
      //Где доступен сервис
      LN.curentLayout = 3;
      MyApp.app.navigate('map');
      //Map.createMap();
      break;
    }
    case 'howToUse':
    {
      //Где доступен сервис
      LN.curentLayout = 4;
      //MyApp.app.navigate('home');
      break;
    }
  }

  $('#slideOut').dxSlideOut('instance').hideMenu();
}

  var LN = new layoutNavigator();