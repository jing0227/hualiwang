
$(".bb").mouseover(function(){
       $(".box").css("display","block")
   })
   $(".bb").mouseout(function(){
           $(".box").css("display","none")
       })
  $(".box-l").mouseover(function(){
       $(".box-r").css({display:"block",marginTop:"-285px"})
   })
   $(".box-l").mouseout(function(){
           $(".box-r").css("display","none")
       })