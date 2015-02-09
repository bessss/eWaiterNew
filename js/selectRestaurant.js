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
      //Предлагаем выбор - показываем выбор
      $('#restaurantMenu').parent().css('display','block');
      $('#anotherRestaurant').parent().css('display','block');
      //console.log('Выборка');
    }
    else
    {
      //Автоматически загружаем - скрываем выбор
      //$('#anotherRestaurant').parent().css('display','none');
      //$('#restaurantMenu').parent().css('display','block');

      //console.log('Автоматическая загрузка');
      this.curentRestaurant = SRN.nearStoreRestaurant;
      MR.getMenu();
    }
  }
  else
  {
    //Загружаем страницу - нет ничего рядом
    $('#restaurantMenu').parent().css('display','none');
    $('#anotherRestaurant').parent().css('display','none');

    //console.log('Ничего нет рядом');
    this.curentRestaurant = null;
  }

  //WOLM.;
}

var SR = new selectRestaurant();