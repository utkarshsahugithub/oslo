let array = document.querySelectorAll(".slide");
let index = 0;
function foo(index) {
    array[index-1].firstChild.classList.remove("active");
    array[index-1].firstChild.classList.add("inactive");
}
function showBanner(index) {
    console.log(array[index].firstChild);
    array[index].firstChild.classList.add("active");
    array[index].firstChild.classList.remove("inactive");
    if(index !== 0) {
        foo(index);
    } 
    else{
        array[array.length-1].firstChild.classList.remove("active");
        array[array.length-1].firstChild.classList.add("inactive");
    }
}
let rightBtn = document.querySelector('.right');
rightBtn.addEventListener('click', () => {
    index++;
    if(index<array.length) {
        showBanner(index);
        
    } else if (index===array.length) {
        index=0;
        showBanner(index);
        
    }
})

let leftBtn = document.querySelector('.left');
leftBtn.addEventListener('click', () => {
     index--;
     if(index<0){
        showBanner(array.length-1);    
        foo(1);
        index=2;
    }
    else{
        showBanner(index);
        foo(index+2);
    }
})
function removeActiveAddInactive(array) {
    array.forEach(element => {
        element.classList.remove(".active")
        element.classList.add(".inactive")
    });
}
function addActiveRemoveInactive(array, index) {
    showBanner(index)
}
function displayBanner(circle, index){
    // console.log(array[i].firstChild);
    // array[index].firstChild.classList.add("active");
    // array[index].firstChild.classList.remove("inactive");
    const array = [ ...circle ];

    var copyArray = array.slice();
    copyArray.splice(index, 1)
    addActiveRemoveInactive(circle, index);
    removeActiveAddInactive(copyArray);
}
let circle = document.querySelectorAll(".circle");
for(let i=0; i<circle.length; i++) {
    circle[i].addEventListener('click', () => {
        // console.log(circle[i]);
        displayBanner(circle, i);
    })
}