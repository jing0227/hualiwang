class Register{
        constructor(){
            this.user = document.getElementById("user")
            this.pass = document.getElementById("pass")
            this.opass = document.getElementById("pass1")
            this.btn = document.getElementById("btn")
            this.span = document.querySelector(".box span")

            this.addEvent()
        }
        addEvent(){
            var that = this;
            this.btn.onclick = function(){
                that.setLocal()
            }
        }
        setLocal(){
            // 之前有没有
            this.userMsg = localStorage.getItem("userMsg");
            this.userMsg = this.userMsg ? JSON.parse(this.userMsg) : [];

            // 之前没有，直接存
            if(this.userMsg.length<1){
                this.userMsg.push({
                    user:this.user.value,
                    pass:this.pass.value,
                    onoff:0
                })
            }else{
                // 之前有，判断是否重名
                var o = this.userMsg.some(val=>{
                    return val.user === this.user.value;
                })
                if(o){
                    this.span.innerHTML = "重名";
                }else{
                    this.span.innerHTML = "注册成功,请登录";
                    this.userMsg.push({
                        user:this.user.value,
                        pass:this.pass.value,
                        onoff:0
                    })
                }
            }

            localStorage.setItem("userMsg",JSON.stringify(this.userMsg))
        }
    }

    new Register();