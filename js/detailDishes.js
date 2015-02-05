function detailDishes()
{
  this.detailPage = null;

  this.createDetailPage = createDetailPage;
  this.testID = testID;
}

function createDetailPage()
{
  this.detailPage = $(
    '<div data-options="dxView : { name: \'menuDetail_\' + mainObject.additionInfo[\'menuId\'], title: mainObject.additionInfo[\'name\']} ">' +
    '<div id="detailMenu" data-bind="dxList: { dataSource: detailMenu, grouped: true }">' +
    '<div data-options="dxTemplate: { name: \'group\' }">' +
    '<div style="margin: 0px 3% 10px 3%;color: #ffffff;text-align: center;" data-bind="text: name"></div>' +
    '<div style="text-align: center;"><img style="width: 94%;" data-bind="attr: { src: image }" /></div>' +
    '<div style="margin: 10px 3% 0px 3%;height: 50px;">' +
    '<div style="font-size: 12px;margin: 0px 0px 4px 8px;">Оцените блюдо</div>' +
    '<div class="rating" id="stars" style="height: 36px;">' +
    '<input type="hidden" name="val" value="' + mainObject.additionInfo.rating + '">' +
    '<input type="hidden" name="votes" value="' + mainObject.additionInfo.voiceCount + '">' +
    '</div>' +
    '<input type="hidden" id="index" data-bind="text: index">' +
    '<div style="text-align: right;color: #ffffff;" data-bind="text: price"></div>' +
    '<div style="text-align: right;font-size: 10px;">id: ' +
    '<span id="menuId" data-bind="text: menuId"></span>' +
    '</div>' +
    '</div>' +
    '<!--<div id="mc-container"></div>-->' +
    '<div style="width: 100%;height: 300px;margin-top: 14px;" id="iFRM"></div>' +
    '</div>' +
    '</div>' +
    '</div>');

    if ( !MyApp.app.getViewTemplateInfo( 'menuDetail_' + mainObject.additionInfo['menuId'] ) ) {
      MyApp.app.loadTemplates( DD.detailPage );
    }
}

function testID(element)
{
  $('#1234r').attr('id','');
  element.id = '1234r';
  console.log( $('#1234r').children('div') );
}

var DD = new detailDishes();