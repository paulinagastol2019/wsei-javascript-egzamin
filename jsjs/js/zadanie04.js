1//

let elements = document.getElementsByClassName("sample_class");

function getTagsOfElements(elements) {
let tablica = [];
for(let e of elements){
    tablica.push(e.tagName);
}
return tablica;
}
//  console.log(getTagsOfElements(elements));


let elements2 = document.getElementById("sample_id");
function getClassesOfElement(element){
    let tablica = [];
    for(let classIn of element.classList){
        tablica.push(classIn);
    }
    return tablica;
}

// console.log(getClassesOfElement(elements2));

let elements3 = document.getElementById("sample_class2");
function getInnerTextOfElements(elements){
    let tablica = [];
    for(let TextIn of elements.nodeName){
        tablica.push(TextIn);
    }
    return tablica;
}
//  console.log(getInnerTextOfElements(elements3));

let elements4 = document.getElementsByTagName("a");
function getAddressesOfElements(elements){
    let tablica = [];
    for(let linkIn of elements){
        tablica.push(linkIn);
    }
    return tablica;
}
console.log(getAddressesOfElements(elements4));

let elements5 = document.getElementsByClassName('sample_class_3');
