/**
 * Created by mes on 2018/1/20.
 */
$(function(){
   $(".button").hover(
       //这里是鼠标移进来的回调方法，mouseenter
       function(){
       $('.toolTip').show();
       var title = $(this).attr('data-text');
       $(".toolTip em").html(title); //动态获取内容，并添加
       console.log(title);
       //获取按钮距离左边的位置，让提示框也距离那么多
       var leftLoc = $(this).offset().left;

       //让toolTip位于按钮的中间位置，需要知道按钮的宽度和toolTip的宽度，
       //然后让leftLoc-(toolTip-button)/2，这就是toolTip需要向左移动的距离
       var toolTipCenterLoc = leftLoc - ($('.toolTip').outerWidth() - $(this).outerWidth())/2;
       console.log($('.toolTip em').width(),$('.toolTip').outerWidth());

       $(".toolTip").css({
           left : toolTipCenterLoc,
           top : 200
       }).animate({
           opacity : 1,
           top : 255
       },300,'linear');
       console.log(leftLoc,$(".toolTip").offset().left);
    },
       //这里是鼠标移进来的回调方法，mouseleave
       function(){
           $(".toolTip").hide();
       });
});