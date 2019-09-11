 ;(function($){
   "use strict";
   class List{
    constructor(){
      this.cont = document.getElementById("cont");
      this.url ="http://localhost/hualiwang/data/goods.json";

      this.init();
    
    }
    init(){
      var that = this;
      ajax({
        url:this.url,
        success:function(res){
          that.res = JSON.parse(res)
          that.display()
          console.log(res)
        }
      })
    }
    display(){
      var str = "";
      for(var i=0;i<this.res.length;i++){
                  str += `<li index="${this.res[i].goodsId}">
                             <a>
              <img src="${this.res[i].src}">
              <p>${this.res[i].name}</p>
              <span>${this.res[i].price}</span>
               </a>
            </li>`
      }
      this.cont.innerHTML = str;
          }
      }
          new List();
          //送长辈鲜花
          class List1{
    constructor(){
      this.cont1 = document.getElementById("cont1");
      this.url ="http://localhost/hualiwang/data/goods2.json";

      this.init();
    
    }
    init(){
      var that = this;
      ajax({
        url:this.url,
        success:function(res){
          that.res = JSON.parse(res)
          that.display()
        }
      })
    }
    display(){
      var str = "";
      for(var i=0;i<this.res.length;i++){
                  str += `<li index="${this.res[i].goodsId}">
                             <a>
              <img src="${this.res[i].src}">
              <p>${this.res[i].name}</p>
              <span>${this.res[i].price}</span>
               </a>
            </li>`
      }
      this.cont1.innerHTML = str;
          }
      }
          new List1();
       //永生花
          class List2{
    constructor(){
      this.cont3 = document.getElementById("cont2");
      this.url ="http://localhost/hualiwang/data/goods3.json";

      this.init();
    
    }
    init(){
      var that = this;
      ajax({
        url:this.url,
        success:function(res){
          that.res = JSON.parse(res)
          that.display()
        }
      })
    }
    display(){
      var str = "";
      for(var i=0;i<this.res.length;i++){
                  str += `<li index="${this.res[i].goodsId}">
                             <a>
              <img src="${this.res[i].src}">
              <p>${this.res[i].name}</p>
              <span>${this.res[i].price}</span>
               </a>
            </li>`
      }
      this.cont3.innerHTML = str;
          }
      }
          new List2;

         //蛋糕
          class List4{
    constructor(){
      this.cont4 = document.getElementById("cont3");
      this.url ="http://localhost/hualiwang/data/goods4.json";

      this.init();
    
    }
    init(){
      var that = this;
      ajax({
        url:this.url,
        success:function(res){
          that.res = JSON.parse(res)
          that.display()
        }
      })
    }
    display(){
      var str = "";
      for(var i=0;i<this.res.length;i++){
                  str += `<li index="${this.res[i].goodsId}">
                             <a>
              <img src="${this.res[i].src}">
              <p>${this.res[i].name}</p>
              <span>${this.res[i].price}</span>
               </a>
            </li>`
      }
      this.cont4.innerHTML = str;
          }
      }
          new List4;
     //礼品
          class List5{
    constructor(){
      this.cont5 = document.getElementById("cont4");
      this.url ="http://localhost/hualiwang/data/goods5.json";

      this.init();
    
    }
    init(){
      var that = this;
      ajax({
        url:this.url,
        success:function(res){
          that.res = JSON.parse(res)
          that.display()
        }
      })
    }
    display(){
      var str = "";
      for(var i=0;i<this.res.length;i++){
                  str += `<li index="${this.res[i].goodsId}">
                             <a>
              <img src="${this.res[i].src}">
              <p>${this.res[i].name}</p>
              <span>${this.res[i].price}</span>
               </a>
            </li>`
      }
      this.cont5.innerHTML = str;
          }
      }
          new List5;
   })(jQuery);    