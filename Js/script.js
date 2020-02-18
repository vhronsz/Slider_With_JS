let pos_x = 0;
let pos_y = 0;
let x = document.getElementById("Container");
let b = document.getElementById("Content");

window.addEventListener("load",function(e){
    pos_x = b.offsetLeft
    pos_y = b.offsetTop
});

x.addEventListener("mousemove",function(e){
    pos_x += e.movementX;
    pos_y += e.movementY;
    $("#Content").css("left",pos_x);
    $("#Content").css("top",pos_y);
});