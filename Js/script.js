let pos_x = 0;
let pos_y = 0;
let clicked = false;
let container = document.getElementById("Container");
let content = document.getElementById("Content");

window.addEventListener("load",function(e){
    pos_x = container.offsetLeft
    pos_y = container.offsetTop 
});

container.addEventListener("mousemove",function(e){
    if(clicked){
        pos_x += e.movementX;
        pos_y += e.movementY;
        $("#Content").css("left",pos_x);
        $("#Content").css("top",pos_y);
    }
});

container.addEventListener("mouseleave",function(e){
   clicked = false;
});

container.addEventListener("mousedown",function(){
    clicked = true;
});

container.addEventListener("mouseup",function(){
    clicked = false;
});



