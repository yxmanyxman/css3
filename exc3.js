function setHight(){
    //窗口关联高度
    var max_height = document.documentElement.clientHeight;
    var primary = document.getElementById('win');
    primary.style.minHeight = max_height+"px";
    primary.style.maxHeight = max_height+"px";

}
