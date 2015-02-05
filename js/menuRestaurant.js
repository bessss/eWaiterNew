//var MRlist = new DevExpress.data.DataSource([]);

function menuRestaurant()
{
  this.pivotOptions = {
    dataSource: undefined
  }

  this.items = new Array();
  this.menuTypeStore = new Array();
  this.menuStore = new Array();

  this.setItems = setItems;
  this.getImagePath = getImagePath;
  this.getMenu = getMenu;
}

function getImagePath(imagePath)
{
  return 'http://admin.ewaiter.info/' + imagePath;
}

function setItems()
{
  for ( var i = 0; i < MR.menuTypeStore.length; ++i )
  {
    MR.items[i] = {
      title: MR.menuTypeStore[i]['menuTypeName'],
      MRlist: new DevExpress.data.DataSource({
      store: MR.menuStore, sort: 'menuName', filter: ['menuTypeName', '=', MR.menuTypeStore[i]['menuTypeName']]})
    }
  }

  MR.pivotOptions.itemTemplate = 'MRx';
  MR.pivotOptions.dataSource = MR.items;
  $('#pivotMenu').css('display','block');
  $('#pivotMenu').dxPivot( MR.pivotOptions );
}

function getMenu()
{
  //MR.pivotOptions.itemTemplate = undefined;
  MR.pivotOptions.dataSource = undefined;

  $('#pivotMenu').dxPivot( MR.options );
  var obj = this;

  $.ajax({
    type: "POST",
    url: 'http://admin.ewaiter.info/outputs/outputMenuMenuType.php?idRest=' + SR.curentRestaurant[0]['idRestaurant'],
    data: "name=getMenu",
    error: function(){
      //LP.deleteLoadPanel();
    },
    success: function(msg){
      if ( msg != 'no data' )
      {
        var temp = JSON.parse(msg);
        obj.menuStore = temp['menuMenuType'];
        obj.menuTypeStore = temp['menuType'];
        obj.setItems();
      }
      else
      {
        //MyApp.app.navigation[1].option("visible", false);
        //LP.createToastMessage('Меню для этого ресторана отсутствует',3000,1);
      }
    }
  });

  //LP.deleteLoadPanel();
}

var MR = new menuRestaurant();