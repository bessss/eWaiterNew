function socialSharing()
{
  this.setSharing = setSharing;
}

function setSharing()
{
  var tempSubject = 'Отзыв на блюдо: ' + DD.additionInfo['name'];
  var tempText = 'Отзыв на блюдо: ' + DD.additionInfo['name'] + ' в ресторане: ' + SR.curentRestaurant[0]['shotName'] + ' (адерес: ' + SR.curentRestaurant[0]['adress'] + ')';
  try{
    window.plugins.socialsharing.share(tempText, tempSubject);
  }
  catch(e)
  {
    TM.createToastMessage('Работает только на мобильном устройстве', 2000, 2);
  }
}

var SS = new socialSharing();