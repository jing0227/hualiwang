class List{
        constructor(){
        	console.log(1)
            this.url = "http://localhost/hualiwang/data/goods6.json";
            this.box = document.querySelector("#box")
            this.load();
            // 1.准备绑定点击事件
            this.addEvent();
        }
        load(){
            var that = this;
            ajax({
                url:this.url,
                success:function(res){
                	console.log(res)
                    that.res = JSON.parse(res)
                    that.display();
                }
            })
        }
        display(){

            console.log(this.res);
            var str = "";
            for(var i=0;i<this.res.length;i++){
                str += `<div class="goods" index="${this.res[i].goodsId}">
                            <img src="${this.res[i].url}" >
                            <p>${this.res[i].name}</p>
                            <span>${this.res[i].price}</span>
                            <i class="bn">
                            查看详情
                            </i>
                            <b class="btn">
                            <a href="../html/car.html">加入购物车</a>
                            </b>
                        </div>`
            }
            this.box.innerHTML = str;

            
        }
        addEvent(){
            var that = this;
            this.box.addEventListener("click",function(eve){
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if(target.className == "bn"){
                    // 2.提前找到点击商品的唯一的id
                  
                    that.id = target.parentNode.getAttribute("index");
                    // 3.准备存储localstorage
                      console.log(that.id)
                    that.setLocal();
                }
            })
        }
        setLocal(){
           //存储每个商品对应的id值
                this.onlyId=(localStorage.setItem("onlyId",JSON.stringify(this.id)));
                location.href="product.html";

        }
    }

    new List();
