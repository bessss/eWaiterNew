function toastMessage()
{
  this.toastOptions = {
    message: '',
    displayTime: 3000,
    type: 'success',
    visible: false
  }

  this.createToastMessage = createToastMessage;
  this.deleteToastMessage = deleteToastMessage;
}

function createToastMessage(message,displayTime,status)
{
  var obj = this;
  switch ( status )
  {
    case 0:{
      this.toastOptions.type = 'error';
      break;
    }
    case 1:{
      this.toastOptions.type = 'warning';
      break;
    }
    case 2:{
      this.toastOptions.type = 'info';
      break;
    }
    default:{
      this.toastOptions.type = 'success';
      break;
    }
  }

  this.toastOptions.message = message;
  this.toastOptions.visible = true;
  this.toastOptions.displayTime = displayTime;
  $('#toastPanel').dxToast( obj.toastOptions );

  setTimeout(function(){
    obj.deleteToastMessage();
  },displayTime);
}

function deleteToastMessage()
{
  var obj = this;
  this.toastOptions.visible = false;
  this.toastOptions.message = '';
  $('#toastPanel').dxToast( obj.toastOptions );
}

var TM = new toastMessage();