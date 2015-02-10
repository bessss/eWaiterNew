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
  this.options.message = '';
  this.options.visible = false;
  $('#loadPanel').dxLoadPanel( obj.options );
}
function createLoadPanel(message)
{
  var obj = this;
  LP.deleteLoadPanel();
  LP.options.message = message;
  LP.options.visible = true;
  $('#loadPanel').dxLoadPanel( obj.options );
}

var LP = new loadPanel();