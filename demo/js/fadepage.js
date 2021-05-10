$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(800); //一開始淡入
    $('a.link').click(function(event) { //點選 class 為 link 的 a 元件時觸發
        event.preventDefault(); //取消事件預設動作
        newLocation = this.href;
        $('body').fadeOut(800, newpage); //點選後淡出
    });

    function newpage() {
        window.location = newLocation;
    }
});