function changeCoord()
{
  this.posCount = 0;
  this.timer = '';
  this.setChangeCoordTimer = setChangeCoordTimer;
  this.changeCoordinates = changeCoordinates;
}

function changeCoordinates()
{
  switch( this.timer )
  {
    case 1:
    {
      CD.curentCoordinates['x'] = 60.0012;
      CD.curentCoordinates['y'] = 30.202;
      TM.createToastMessage('Смена позиции - ДОМ',2000,0);
      break;
    }
    case 2:
    {
      CD.curentCoordinates['x'] = 59.9982;
      CD.curentCoordinates['y'] = 30.1973;
      TM.createToastMessage('Смена позиции - РУСЯ',2000,0);
      break;
    }
    case 3:
    {
      CD.curentCoordinates['x'] = 60.0043;
      CD.curentCoordinates['y'] = 30.2059;
      TM.createToastMessage('Смена позиции - ВЛАДА',2000,0);
      break;
    }
    case 4:
    {
      CD.curentCoordinates['x'] = 59.9977;
      CD.curentCoordinates['y'] = 30.2125;
      TM.createToastMessage('Смена позиции - ПУСТЫРЬ',2000,0);
      break;
    }
    default:
    {
      this.timer = 0;
      break;
    }
  }

  //mapObject.setPosition();
}

function setChangeCoordTimer()
{
  this.timer = setInterval(function(){
    CC.timer += 1;
    CC.changeCoordinates();
  },10000);
}

var CC = new changeCoord();