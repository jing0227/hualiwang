 window.onload = function(){
		   function setBg(ids,bg){
			   var sml = document.getElementById(ids);
			   sml.onmouseover = function(){
			   document.getElementById("bigd").style.background = bg;
			   }
			}
			
			   setBg("li1","url(../images/k1.jpg) left top no-repeat");
			   setBg("li2","url(../images/k2.jpg) left top no-repeat");
			   setBg("li3","url(../images/k3.jpg) left top no-repeat");
		;
	  }
	  
	  
	  var $a = function setid(ids){
		  
		  return document.getElementById(ids);
		  }
		  
	  function setStyle(){
		  
		  $a('odiv-left').style.border = "lpx solid #ff0000";
          }