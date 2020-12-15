


function slider(condition) {
  var current = $(".item.current"),
      next,
      index;
  if (condition >= 0) {
    next = $(".item").eq(condition);
    index = condition;
  } else if (condition == 'prev') {
    next = current.is(":first-child") ? $(".item").last() : current.prev();
    index = next.index();
  }else {
    next = current.is(":last-child") ? $(".item").first() : current.next();
    index = next.index();
  }
  next.addClass("current");
  current.removeClass("current");
  $(".dot").eq(index).addClass("current").siblings().removeClass("current");
}
var setSlider = setInterval(slider, 4000);

$(".button").on("click", function() {
  clearInterval(setSlider);
  var flag = $(this).is(".prev") ? 'prev' : 'next';
  slider(flag);
  setSlider = setInterval(slider, 4000);
});

$(".dot").on("click", function() {
  if ($(this).is(".current")) return;
  clearInterval(setSlider);
  var index = $(this).index();
  slider(index);
  setSlider = setInterval(slider, 4000);
});


