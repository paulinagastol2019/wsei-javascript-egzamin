window.onload = start;

function start(){
    document.getElementById("button-1").onclick = dopisz;
}
function dopisz(){
var list = document.getElementById("shopping-list");
list.innerHTML='<ul style="list-style:none" ><li>Jajka</li><li>Mąka</li><li>Cukier</li><li>Chleb</li></ul>';

		}