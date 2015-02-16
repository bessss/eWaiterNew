function noRestaurants()
{
  this.galleryNoRestaurants = new DevExpress.data.DataSource([
    {
      src: 'images/default.png',
      topText: 'Нет ресторанов рядом с Вами',
      bottomText: 'Вам предложат выбор при их появлении'
    }
  ]);

  this.interval = new Object();

  this.setNRInterval = setNRInterval;
  this.clearNRInterval = clearNRInterval;
}

function clearNRInterval()
{
  var obj = this;
  clearInterval( obj.interval );
}

function setNRInterval()
{

  this.interval = setInterval(function()
  {
    if ( clickCount() == 10 )
    {
      clickCount(0);
    }
    else
    {
      clickCount(clickCount() + 1);
    }
  },1000);
}

var NR = new noRestaurants();