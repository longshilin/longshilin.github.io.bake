/*
$(function() {
  var $sidebar = $("#sidebar"),
      $window = $(window),
      offset = $sidebar.offset(),
      topPadding = 0,
      $pageH = $(document).height(),
      $viewH = $sidebar.height();


  $window.scroll(function() {
    var $scrollH = $window.scrollTop();
    console.log($scrollH + " " + $viewH + " " + $pageH)

    if(($scrollH + $viewH)/$pageH >= 1)
      return false;

    if ($window.scrollTop() > offset.top) {
      $sidebar.stop().animate({marginTop: $window.scrollTop() - offset.top + topPadding}, "fast");
    } else {
      $sidebar.stop().animate({marginTop: 0}, "fast");
    }
  });
});


$(function() {
  var $sidebar = $("#sidebar"),
      $toc = $("#toc"),
      $window = $(window),
      offset = $sidebar.offset(),
      topPadding = 0,
      $sidebarH = $sidebar.height(),
      height = 0;

  $window.scroll(function() {
    $bodyH = $("#main-body").height();

    console.log(height + " " + $sidebarH +" " + $bodyH)

    if( $bodyH < $sidebarH )
      return false;
    if ($window.scrollTop() > $sidebarH)
      $toc.offset({top: 0});
  });
});
*/
