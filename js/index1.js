 class Index{
        constructor(){
            this.p1 = document.querySelector(".p1")
            this.p2 = document.querySelector(".p2")
            this.span = document.querySelector(".p2 span")
            this.em = document.querySelector(".p2 em")

            this.getLocal();
            this.login();
            this.addEvent();
        }
        getLocal(){
            // 之前有没有
            this.userMsg = localStorage.getItem("userMsg");
            this.userMsg = this.userMsg ? JSON.parse(this.userMsg) : [];
        }
        login(){
            this.i = 0;
            var o = this.userMsg.some((val,index)=>{
                this.i = index;
                return val.onoff == 1;
            })
            if(o){
                this.p1.style.display = "none";
                this.p2.style.display = "block";
                this.span.innerHTML = this.userMsg[this.i].user;
            }
        }
        addEvent(){
            var that = this;
            this.em.onclick = function(){
                that.userMsg[that.i].onoff = 0;
                localStorage.setItem("userMsg",JSON.stringify(that.userMsg));
                that.p1.style.display = "block";
                that.p2.style.display = "none";
                that.span.innerHTML = "";
            }
        }
    }

    new Index();