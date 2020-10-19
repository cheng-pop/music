//  点击变色 
// 鼠标点击那个进行的操作
var trObj=document.getElementById("tbody").getElementsByTagName("tr");
    for (var i=0;i<trObj.length;i++){
        // 鼠标进入的操作
        trObj[i].onmouseover=function () {
            this.style.backgroundColor="rgba(119, 104, 104, 0.2)";
        }
        // 鼠标离开的操作
        trObj[i].onmouseout=function () {
            this.style.backgroundColor="";
        }
    }
