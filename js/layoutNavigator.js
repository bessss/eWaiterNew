function layoutNavigator()
{
  this.curentLayout = 0;
  this.items = [
    { text: 'Меню ресторана', icon: 'plus', menuTemplate: 'restaurantMenu' },
    { text: 'Другой ресторан', icon: 'plus', menuTemplate: 'anotherRestaurant' },
    { text: 'Где доступен сервис', icon: 'plus', menuTemplate: 'map' },
    { text: 'Как пользоваться', icon: 'plus', menuTemplate: 'howToUse' }
  ]
  this.setLayout = setLayout;
}

function setLayout(e)
{
  switch ( e.itemIndex )
  {
    case 0:
    {
      //Меню ресторана
      LN.curentLayout = 0;
      MyApp.app.navigate('home');
      break;
    }
    case 1:
    {
      //Где доступен сервис
      LN.curentLayout = 1;
      MyApp.app.navigate('home');
      break;
    }
    case 2:
    {
      //Где доступен сервис
      LN.curentLayout = 2;
      MyApp.app.navigate('home');
      break;
    }
    case 3:
    {
      //Где доступен сервис
      LN.curentLayout = 3;
      MyApp.app.navigate('home');
      break;
    }
  }

  $('#slideOut').dxSlideOut('instance').hideMenu();
}

  var LN = new layoutNavigator();