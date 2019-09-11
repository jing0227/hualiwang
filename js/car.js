 class Car{
        constructor(){
            this.url = "http://localhost/hualiwang/data/goods6.json";
            this.tbody = document.querySelector("tbody");
            // 1.开始请求所有数据
            this.load();
            // 4.利用事件委托绑定删除和改数量的事件
            this.addEvent();
        }
        load(){
            var that = this;
            ajax({
                url:this.url,
                success:function(res){
                    that.res = JSON.parse(res);
                    // 2.ajax请求成功之后，获取localstorage
                    that.getLocal();
                }
            })
        }
        getLocal(){
            // 获取
            this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
            // 3.渲染页面
            this.display()
        }
        display(){
            var str = "";
            for(var i=0;i<this.res.length;i++){
                for(var j=0;j<this.goods.length;j++){
                    // 比较筛选
                    if(this.res[i].goodsId == this.goods[j].id){
                        str += `<tr index="${this.res[i].goodsId}">
                                    <td><img src="${this.res[i].url}"></td>
                                    <td>${this.res[i].name}</td>
                                    <td>${this.res[i].price}</td>
                                    <td><input type="number" value="${this.goods[j].num}" class="num" min=1></td>
                                    <td class="delete">删除</td>
                                </tr>`
                    }
                }
            }
            // 填充
            this.tbody.innerHTML = str;
        }
        addEvent(){
            var that = this;
            this.tbody.addEventListener("click",function(eve){
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if(target.className == "delete"){
                    // 5.保存点击删除的商品的id
                    that.id = target.parentNode.getAttribute("index");
                    // 6.删除DOM元素
                    target.parentNode.remove();
                    // 7.从localstorage中找到对应的商品数据
                    that.setLocal(function(i){
                        // 删除
                        that.goods.splice(i,1);
                    });
                }
            })
            this.tbody.addEventListener("input",function(eve){
                var e = eve || window.event;
                var target = e.target || e.srcElement;
                if(target.className == "num"){
                    // 8.保存点击删除的商品的数量和id
                    that.val = target.value;
                    that.id = target.parentNode.parentNode.getAttribute("index");
                    // 9.从localstorage中找到对应的商品数据
                    that.setLocal(function(i){
                        // 修改
                        that.goods[i].num = that.val;
                    })
                }
            })
        }
        setLocal(fn){
            // 遍历localstorage的数据
            for(var i=0;i<this.goods.length;i++){
                // 判断符合
                if(this.goods[i].id == this.id){
                    // 做拿到相同数据之后的操作，可能是删除，可能是修改，取决于回调函数中传什么
                    fn(i);
                }
            }
            // 再设置回去，实现修改localstorage的目的
            localStorage.setItem("goods",JSON.stringify(this.goods));
        }
        
    }

    new Car();
