function noInternet()
{
  this.galleryNoInternet = new DevExpress.data.DataSource([
    {
      src: 'images/default.png',
      topText: 'Отсутствует интернет соединение',
      bottomText: 'При появлении интернета работа продолжится'
    }
  ]);

  this.interval = new object();

  this.setNIInterval = setNIInterval;
  this.clearNIInterval = clearNIInterval;
}

function clearNIInterval()
{
  var obj = this;
  clearInterval( obj.interval );
}

function setNIInterval()
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

var NI = new noInternet();