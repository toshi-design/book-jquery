/**
 * 02-01　開閉するボックス
 */
$(function(){
	$('.nav-info')
	.on('click', function(){
		$('.wrapper-headerinfo').slideToggle(400);
	});
});

/**
 * 02-02　レスポンシブなナビゲーション
 */
$(function(){
	$('.menubtn > a')
	.on('click', function(){
		$('.nav-global').slideToggle(400);
	});
});