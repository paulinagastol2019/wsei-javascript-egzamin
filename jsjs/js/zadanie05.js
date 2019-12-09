// window.onload = function(){
//     var b = document.querySelector("*[data-text = '']");

    

//     document.getElementById("container").innerHTML = b;

// }
var but = document.getElementsByTagName("button");
function appendDataText(b){
    let container = document.getElementById("container");
    container.innerHTML = b.getAttribute("data-text");

}
for(let b of but){  
    b.addEventListener("click",function(){
        document.getElementById("container").innerHTML = b.getAttribute("data-text");   })
}

