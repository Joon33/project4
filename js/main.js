
$(function(){
     
  var openBtn = $('#open_btn');
  var closeBtn = $('#close_btn');
 //  .light-box-wrap

 openBtn.click(function(){
   $('.light-box-wrap').fadeIn(600);
 });
 closeBtn.click(function(){
   $('.light-box-wrap').fadeOut(600);
 });
  
});

