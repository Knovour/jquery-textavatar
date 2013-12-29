$('.textavatar').textAvatar();
$('#scroll-spy').niceScroll({
  boxzoom: true,
  horizrailenabled: false,
  cursorwidth: '8'
});
var $content = $('#test');

urlSwitch(location.hash);

$(window).on('hashchange', function(e) {urlSwitch(location.hash);});

$('input').on('keyup keydown keypress change', function() {
  var name = $('#name').val();
  var size = $('#size').val();
  
  if(!name) {
    $content.hide();
    return;
  }
  
  $content.show().textAvatar({
    name: name,
    width: size
  });
});

$('#main-nav a').click(function(e) {
  e.preventDefault();
  switchTo(this.hash);
  tabSwitch($(this));
});

function urlSwitch(idFromUrl) {
  if($(idFromUrl).length)
    tabSwitch($('a[href=' + idFromUrl + ']'));
}

function switchTo(hash) {
  var toTop = $(hash).position().top;
  var scorllbarPosition = $('#scroll-spy').scrollTop();
  
  console.log(hash);
  $('#scroll-spy').animate({
    scrollTop: toTop + scorllbarPosition
  }, 300, function() {
    // when done, add hash to url
    // (default click behaviour)
    window.location.hash = hash;
  });
}

function tabSwitch($a) {
  $('#main-nav li.active').removeClass('active');
  $a.closest('li').addClass('active');
}
