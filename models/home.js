MyApp.home = function (params) {
  var viewModel = {
    handleAdd: function () {
      menuVisible(!menuVisible());
    }
  };

  return viewModel;
};