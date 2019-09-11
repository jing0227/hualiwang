 class Login{
        constructor(){
            this.user = document.getElementById("user")
            this.pass = document.getElementById("pass")
            this.btn = document.getElementById("btn")
            this.span = document.querySelector(".box span")

            this.addEvent();
            this.getLocal();
        }
        addEvent(){
            var that = this;
            this.btn.onclick = function(){
                that.login();
            }
        }
        getLocal(){
            // 之前有没有
            this.userMsg = localStorage.getItem("userMsg");
            this.userMsg = this.userMsg ? JSON.parse(this.userMsg) : [];
        }
        login(){
            var i = 0;
            var o = this.userMsg.some((val,index)=>{
                i = index;
                return val.user == this.user.value && val.pass == this.pass.value;
            })
            if(o){
                this.span.innerHTML = "登录成功，三秒自动跳转主页面";
                this.userMsg[i].onoff = 1;
                setTimeout(() => {
                    location.href = "index.html";
                }, 2000);
            }else{
                this.span.innerHTML = "登录失败";
            }
            localStorage.setItem("userMsg",JSON.stringify(this.userMsg))
        }
    }

    new Login();

