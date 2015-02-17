function reviewsDishes()
{
  this.areaHeight = null;

  this.setRewiewsArea = setRewiewsArea;
}

function setRewiewsArea()
{
  this.areaHeight = screen.height - $('div.layout-header').height() - $('div.dx-list-group').height() - 50;
  $('#iFRM').height( RD.areaHeight );

  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  /*disqus_shortname = 'ewaiter'; // required: replace example with your forum shortname
  disqus_identifier = DD.additionInfo['menuId'];
  disqus_title = DD.additionInfo['name'];
  disqus_url = 'http://application/menuDetail_' + DD.additionInfo['menuId'] + '_url';
  disqus_category_id = 'menuDetail_' + DD.additionInfo['menuId'] + '_disqus_category_id';
  DISQUS = new Object();

  (function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    //dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';https://a.disquscdn.com/embed.js
    dsq.src = 'https://a.disquscdn.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();*/

_hcwp = window._hcwp || [];
_hcwp.push({widget:"Stream", widget_id: 21854});
(function() {
if("HC_LOAD_INIT" in window)return;
HC_LOAD_INIT = true;
var lang = (navigator.language || navigator.systemLanguage || navigator.userLanguage || "en").substr(0, 2).toLowerCase();
var hcc = document.createElement("script"); hcc.type = "text/javascript"; hcc.async = true;
hcc.src = ("https:" == document.location.protocol ? "https" : "http")+"://w.hypercomments.com/widget/hc/21854/"+lang+"/widget.js";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hcc, s.nextSibling);
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