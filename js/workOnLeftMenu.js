function workOnLeftMenu()
{
  this.viewHome = viewHome;
  this.viewMap = viewMap;
  this.viewHow = viewHow;
  this.viewHideMenu = viewHideMenu;
  this.entryWOLM = entryWOLM;
}

function entryWOLM(args)
{
  switch ( args.viewInfo.viewName )
  {
    case 'home':
    {
      WOLM.viewHome();
      break;
    }
    case 'map':
    {
      WOLM.viewMap();
      break;
    }
  }
}

function viewHideMenu()
{
  if ( SRN.nearStoreRestaurant.length > 0 )
  {
    if ( SRN.nearStoreRestaurant.length > 1 )
    {
      //Показываем выбор
      $('#restaurantMenu').parent().css('display','block');
      $('#anotherRestaurant').parent().css('display','block');
    }
    else
    {
      //Автоматически загружаем - скрываем выбор
      $('#anotherRestaurant').parent().css('display','none');
      $('#restaurantMenu').parent().css('display','block');
    }
  }
  else
  {
    //Загружаем страницу - нет ничего рядом
    $('#restaurantMenu').parent().css('display','none');
    $('#anotherRestaurant').parent().css('display','none');
  }
}

function viewHome()
{
  $('#restaurantMenu').parent().css('background-color','#e8e8e8');
  $('#map').parent().css('background-color','#dddddd');
  $('#howToUse').parent().css('background-color','#dddddd');
  this.viewHideMenu();
}

function viewMap()
{
  $('#restaurantMenu').parent().css('background-color','#dddddd');
  $('#map').parent().css('background-color','#e8e8e8');
  $('#howToUse').parent().css('background-color','#dddddd');
  this.viewHideMenu();
}

function viewHow()
{
  $('#restaurantMenu').parent().css('background-color','#dddddd');
  $('#map').parent().css('background-color','#dddddd');
  $('#howToUse').parent().css('background-color','#e8e8e8');
  this.viewHideMenu();
}

var WOLM = new workOnLeftMenu();