function detailDishes()
{
  this.detailPage = null;
  this.additionalInfo = new Array();
  this.detailInfoStore = null;
  this.modeRating = false;

  this.createDetailPage = createDetailPage;
  this.searchAdditionInfo = searchAdditionInfo;
  this.searchID = searchID;
}

function searchAdditionInfo(menuId)
{
  DD.additionInfo = {};
  for ( var i = 0; i < MR.menuStore.length; ++i )
  {
    if ( MR.menuStore[i]['menuId'] == menuId )
    {
      DD.additionInfo = {
        image: 'http://admin.ewaiter.info/' + MR.menuStore[i]['image'],
        price: MR.menuStore[i]['price'],
        menuId: menuId,
        ratingImage: MR.menuStore[i]['ratingImage'],
        voiceCount: MR.menuStore[i]['voiceCount'],
        name: MR.menuStore[i]['menuName'],
        rating: MR.menuStore[i]['rating'],
        index: i
      };
    }
  }
}

function createDetailPage()
{
  this.detailPage = $(
    '<div data-options="dxView : { name: \'menuDetail_\' + DD.additionInfo[\'menuId\'], title: DD.additionInfo[\'name\']} ">' +
      '<div id="detailMenu" data-bind="dxList: { dataSource: DD.detailInfoStore, grouped: true }">' +
        '<div data-options="dxTemplate: { name: \'group\' }">' +
          '<!--<div style="margin: 0px 3% 10px 3%;text-align: center;" data-bind="text: name"></div>-->' +
          '<div style="text-align: center;"><img style="width: 94%;" data-bind="attr: { src: image }" /></div>' +
          '<div style="margin: 10px 3% 0px 3%;height: 50px;">' +
            '<div style="font-size: 12px;margin: 0px 0px 4px 8px;">Оцените блюдо</div>' +
            '<div class="rating" id="stars" style="height: 36px;">' +
              '<input type="hidden" name="val" value="' + DD.additionInfo.rating + '">' +
              '<input type="hidden" name="votes" value="' + DD.additionInfo.voiceCount + '">' +
            '</div>' +
            '<input type="hidden" id="index" data-bind="text: index">' +
              '<div style="text-align: right;" data-bind="text: price"></div>' +
              '<div style="text-align: right;font-size: 10px;">id: ' +
                '<span id="menuId" data-bind="text: menuId"></span>' +
              '</div>' +
          '</div>' +
      '<!--<div id="mc-container"></div>-->' +
          '<div style="width: 100%;margin-top: 40px;" id="iFRM">' +
            '<div id="disqus_thread"></div>' +  
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>');

    if ( !MyApp.app.getViewTemplateInfo( 'menuDetail_' + DD.additionInfo['menuId'] ) ) {
      MyApp.app.loadTemplates( DD.detailPage );
    }
}

function searchID(element)
{
  $('#searchTable').attr('id','');
  element.id = 'searchTable';
  DD.searchAdditionInfo( $('#searchTable').find('div.hideID').text() );

  DD.detailInfoStore = new DevExpress.data.DataSource([]);
  DD.detailInfoStore.store().insert( DD.additionInfo );

  DD.createDetailPage();
  MyApp.app.navigate('menuDetail_' + DD.additionInfo['menuId']);
}
var DD = new detailDishes();