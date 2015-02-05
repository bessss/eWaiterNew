/*Выбор ресторана, данные о текущем ресторане*/
function selectRestaurant()
{
  this.curentRestaurant = new Array();
  this.checkRestaurant = false;

  this.selectionRestaurant = selectionRestaurant;
}

function selectionRestaurant()
{
  if ( SRN.nearStoreRestaurant.length > 0 )
  {
    if ( SRN.nearStoreRestaurant.length > 1 )
    {
      //Автоматически загружаем
      console.log('Выборка');
    }
    else
    {
      //Предлагаем выбор
      console.log('Автоматическая загрузка');
      this.curentRestaurant = SRN.nearStoreRestaurant;
      MR.getMenu();
    }
  }
  else
  {
    //Загружаем страницу - нет ничего рядом
    console.log('Ничего нет рядом');
    this.curentRestaurant = null;
  }
}

var SR = new selectRestaurant();