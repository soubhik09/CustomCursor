let main = document.querySelector("#main");
let cursor = document.querySelector(".cursor");


main.addEventListener("mousemove", function(point){
    cursor.style.left = point.x + "px";    
    cursor.style.top = point.y + "px";    
})