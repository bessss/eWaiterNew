MyApp.map = function (params) {
  var viewModel = {
    handleAdd: function () {
      menuVisible(!menuVisible());
    }
  };

  return viewModel;
};