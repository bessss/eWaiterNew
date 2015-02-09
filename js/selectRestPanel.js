function selectRestPanel()
{
  this.options = {
    dataSource: [],
    visible: false,
    title: 'Рестораны рядом',
    itemTemplate: function(itemData, itemIndex, itemElement){
      itemElement.append('<table>\
                            <tr>\
                              <td style="width: 48px;height: 60px;padding: 6px;"><img src="http://ewaiter.info/application/images/' + itemData.cssName + '_theme_logo.png" style="width: 48px;" /></td>\
                              <td style="padding-left: 10px;font-size: 14px;"><div style="text-decoration: underline;">' + itemData.text + '</div><div style="font-size: 12px;">' + itemData.adress + '</div><div style="font-size: 12px;">' + itemData.contact + '</div></td>\
                            </tr>\
                          </table>');
    },
    onItemClick: function (clickOptions)
    {
      SR.curentRestaurant = new Array();
      SR.curentRestaurant.push(clickOptions.itemData);
      MR.getMenu();
    },
    onCancelClick: function ()
    {
      SRP.options.visible = false;
    }
  }
  this.tempArray = new Array();

  this.createPanel = createPanel;
}

function createPanel(user)
{
  var obj = this;
  //LP.deleteLoadPanel();
  //LP.createLoadPanel('Поиск ресторанов рядом с Вами');

  if ( SRN.nearStoreRestaurant.length > 0 )
  {
    this.options.visible = true;
    this.tempArray = new Array();
    this.options.dataSource = SRN.nearStoreRestaurant;
  }
  else
  {
    this.options.visible = false;
  }

  $('#selectRestPanel').dxActionSheet( obj.options );
  //LP.deleteLoadPanel();
}

var SRP = new selectRestPanel();