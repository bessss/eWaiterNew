var restaurantName = '<table id="restaurantName" style="width: 280px; background-image: url(\'images/bg_all.jpg\');">\
      <tr>\
        <td id="imageRestaurant" style="width: 96px;padding-left: 10px;"><img src="images/default_theme_logo.png" /></td>\
        <td style="padding-left: 10px; color: white; width: 184px;">\
          <div id="nameRestaurant" style="font-size: 16px; text-transform: uppercase; font-weight: bold; white-space: normal;">eWaiter</div>\
          <div id="contactRestaurant" style="font-weight: 12px; white-space: normal;"></div>\
        </td>\
      </tr>\
    </table>';

var restaurantMenu = '<table id="restaurantMenu">\
        <tr>\
          <td><img src="images/leftMenu/ic_home_grey.png" style="width: 32px;" /></td>\
          <td style="padding-left: 10px;">Меню ресторана</td>\
        </tr>\
      </table>';


var anotherRestaurant = '<table id="anotherRestaurant">\
        <tr>\
          <td><img src="images/leftMenu/ic_autorene_grey.png" style="width: 28px;" /></td>\
          <td style="padding-left: 10px;">Другой ресторан</td>\
        </tr>\
      </table>';

var map = '<table id="map">\
        <tr>\
          <td><img src="images/leftMenu/ic_room_grey.png" style="width: 28px;" /></td>\
          <td style="padding-left: 10px;">Где доступен сервис</td>\
        </tr>\
      </table>';

var howToUse = '<table id="howToUse">\
        <tr>\
          <td><img src="images/leftMenu/ic_help_grey.png" style="width: 28px;" /></td>\
          <td style="padding-left: 10px;">Как пользоваться</td>\
        </tr>\
      </table>';

function layoutNavigator()
{
  this.curentLayout = 0;

  this.items = [
    { text: 'Название ресторана', menuTemplate: restaurantName },
    { text: 'Меню ресторана', menuTemplate: restaurantMenu, onExecute: "#home" },
    { text: 'Другой ресторан', menuTemplate: anotherRestaurant, action: function(){SRP.createPanel();} },
    { text: 'Где доступен сервис', menuTemplate: map, onExecute: "#map" },
    { text: 'Как пользоваться', menuTemplate: howToUse, onExecute: "#how" }
  ];

  this.setLayout = setLayout;
}

function setLayout(e)
{
  //
}

  var LN = new layoutNavigator();