function loadPanel()
{
  this.options = {
    visible: false,
    message: ''
  }
  this.createLoadPanel = createLoadPanel;
  this.deleteLoadPanel = deleteLoadPanel;
}

function deleteLoadPanel()
{
  var obj = this;

  try{
    window.plugins.spinnerDialog.hide();
  }
  catch(e)
  {
    this.options.message = '';
    this.options.visible = false;
    $('#loadPanel').dxLoadPanel( obj.options );
  }
}
function createLoadPanel(message, title)
{
  var obj = this;

  try{
    if ( title == undefined )
    {
      title = 'eWaiter процесс...';
    }
  
    window.plugins.spinnerDialog.hide();
    window.plugins.spinnerDialog.show(title, message, function(){});
  }
  catch(e)
  {
    LP.deleteLoadPanel();
    LP.options.message = message;
    LP.options.visible = true;
    $('#loadPanel').dxLoadPanel( obj.options );
  }
}

var LP = new loadPanel();