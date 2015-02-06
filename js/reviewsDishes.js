function reviewsDishes()
{
  this.areaHeight = null;

  this.setRewiewsArea = setRewiewsArea;
}

function setRewiewsArea()
{
console.log(screen.height);
console.log($('div.layout-header').height());
console.log($('div.dx-list-group').height());
  this.areaHeight = screen.height - $('div.layout-header').height() - $('div.dx-list-group').height() - 50;
  $('#iFRM').height( RD.areaHeight );

  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  disqus_shortname = 'ewaiter'; // required: replace example with your forum shortname
  disqus_identifier = DD.additionInfo['menuId'];
  disqus_title = DD.additionInfo['name'];
  disqus_url = 'http://application/menuDetail_' + DD.additionInfo['menuId'] + '_url';
  //disqus_category_id = 'menuDetail_' + DD.additionInfo['menuId'] + '_disqus_category_id';
  DISQUS = new Object();

  (function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
}

var RD = new reviewsDishes();

//Переменные для блока комментариев
var disqus_shortname = 'ewaiter';
var disqus_identifier = 'none_identifie';
var disqus_title = '';
var disqus_url = '';
var disqus_category_id = '';
var DISQUS = '';