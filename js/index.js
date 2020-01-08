//定位布局  header
// $(window).on('scroll', function () {
//     var $top = $(this).scrollTop();//滚动条的距离
//     if ($top >= 300) {
//         var t = document.body.clientWidth;
//         $('.header').addClass("header-change-show");
//     }
//     else if ($top < 300) {
//         $('.header').removeClass("header-change-show");
//     }
// });

(function(doc, win) {  
    setRem();  
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',  
        recalc = function() {  
            setRem();  
        };  
    if (!doc.addEventListener)  
        return;  
    win.addEventListener(resizeEvt, recalc, false);  
    doc.addEventListener('DOMContentLoaded', recalc, false);  
})(document, window);  
  
function setRem() {  
    var docEl = document.documentElement;  
    var clientWidth = docEl.clientWidth;  
    if (!clientWidth) {  
        return;  
    }  
    console.log(clientWidth)
    // docEl.style.fontSize = 200 * (clientWidth/1920) + 'px';  
    // if(clientWidth<=800){
    //     docEl.style.fontSize = '10px'  

    // }else{
        docEl.style.fontSize = 100 * (clientWidth /1920) + 'px';  

    // }/

    // docEl.style.fontSize = 14.47 * (clientWidth /5920) + 'px';  

}  

$(document).ready(function(){
    $(".collapse a").each(function(){
        $this = $(this);
        if($this[0].href==String(window.location)){  
            $(".collapse a").removeClass("active");
            $this.addClass("active");  
        }  
    });  
}); 


