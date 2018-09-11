var $mainPage = $('.main-page');
var $rankPage = $('.rank-page');
var $rankButton = $('.main-page .button-list .right');
var $rankClose = $('.rank-page .header .icon');
var $activeExplainPage = $('.active-explain-page');
var $activeExplainButton = $('.active-explain');
var $activeClose = $('.active-explain-page .header .icon');
var $pointPage = $('.point-explain-page');
var $pointButton = $('.main-page .rank-record .right');
var $pointClose = $('.point-explain-page .header .icon');
var $dice = $('.dice');
var $start = $('.main-page .button-list .start');
var $count = $('.main-page .button-list .count');
var $dice0 = $('.dice.dice0');
var $dice1 = $('.dice.dice1');
var $dice2 = $('.dice.dice2');
var $dice3 = $('.dice.dice3');
var $dice4 = $('.dice.dice4');
var $dice5 = $('.dice.dice5');
var $popup = $('.main-page .popup');
var diceArr = [$dice0, $dice1, $dice2, $dice3, $dice4, $dice5];
var count = parseInt($count.text());
var btnSwitch = true;
// 控制切换
function pageSwitch(a, b) {
  a.toggleClass('show');
  b.toggleClass('show');
}
// 排行榜显示
$rankButton.on('click', function () {
  pageSwitch($mainPage, $rankPage);
  reset();
});
// 排行榜关闭
$rankClose.on('click', function () {
  pageSwitch($rankPage, $mainPage);
});
// 活动说明显示
$activeExplainButton.on('click', function () { 
  pageSwitch($mainPage, $activeExplainPage);
  reset();
});
// 活动说明关闭
$activeClose.on('click', function () { 
  pageSwitch($activeExplainPage, $mainPage) 
});
// 积分说明显示
$pointButton.on('click', function () { 
  pageSwitch($mainPage, $pointPage);
  reset();
});
// 积分说明关闭
$pointClose.on('click', function () { 
  pageSwitch($pointPage, $mainPage) 
});
// 博饼动画
function animation(arr) {
  for(var i = 0; i < arr.length; i++) {
    diceArr[i].addClass('animation' + i);
    diceArr[i].addClass('res' + arr[i]);
  }
};
function reset() {
  if($dice0.hasClass('animation0')) {
    for(var i = 0; i < 6; i++) {
      var temp = 'dice dice' + i; 
      diceArr[i].attr('class', temp);
    }
  }
}
// 开始博饼
$start.on('click', function() {
  if(count > 0 && btnSwitch === true) {
    btnSwitch = false;
    var res = boBing();
    reset();
    // 执行动画
    setTimeout(function() {
      animation(res.data.arr);
    },100);
    // 跳出弹出层结果
    $popup.text(res.data.chinese);
    setTimeout(function() {
      $popup.addClass('show');
    }, 600);
    // 结果消失
    setTimeout(function() {
      $popup.removeClass('show');
      btnSwitch = true;
      count--;
      $count.text(count);
    }, 3600);
  } else if (count <= 0) {
    // count === 0
    $popup.text('今日次数已经使用完');
    $popup.addClass('show');
    setTimeout(function() {
      $popup.removeClass('show');
    }, 5000);
  }
})
