$('#scroll-spy').niceScroll({
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

$('#scroll-spy').scroll(function(e) {
  var $h2 = $(this).find('.simple-title');
  var length = $h2.length;

  for(var i = 0; i < length; i++) {
    var $temp1 = $h2.eq(i);

    if((length - i) > 1) {
      var $temp2 = $h2.eq(i + 1);

      var topPosition1 = $temp1.position().top;
      var topPosition2 = $temp2.position().top;
      if(topPosition1 <= 0 && topPosition2 >= 0) {
        var top = Math.abs(topPosition1);
        var hash = '#';
        var $choose = (top < topPosition2) ? $temp1 : $temp2;
        hash += $choose.attr('id');

        //window.location.hash = hash;
        tabSwitch($('a[href=' + hash + ']'));

        break;
      }
    }

    else if((length - i) === 1) //I have no idea why this work
      tabSwitch($('a[href=#license]'));
  }
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
