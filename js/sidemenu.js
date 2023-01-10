$(function(){
    //  ハンバーガーメニューがクリックされるたびにopenというクラスを付け外しする
    $('#humIcon').click(function() {
        $('.bar1, .bar2, .bar3').toggleClass('open');
        $('.sidebar').toggleClass('open');
        }
    )
});