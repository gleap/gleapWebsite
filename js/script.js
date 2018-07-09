$(function() {
  $('.logo').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': position
    }, '500');
  });


// ページ内リンク（アニメーション付き）の設定の仕方。すぐ忘れるから覚えとく！！　永久保存版！


});
