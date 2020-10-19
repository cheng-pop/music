function $(id) {
    return document.getElementById(id);
}

// footer部分中鼠标放上改变样式的操作
var aObj=document.getElementById("mymusic")
        aObj.onmouseover=function () {
            this.style.color="red";
        }
        // 鼠标离开的操作
        aObj.onmouseout=function () {
            this.style.color="";
        
    }
// heder部分导航栏中鼠标放上改变样式的操作
    var ulObj=document.getElementById("title")
    var aObj=ulObj.getElementsByTagName("a")
    for(var i=0;i<aObj.length;i++){
        aObj[i].onmouseover=function () {
            this.style.color="red";
            this.style.fontSize="large"
        }
        // 鼠标离开的操作
        aObj[i].onmouseout=function () {
            this.style.color="";
            this.style.fontSize=""
        
        }   
    }


 

    




