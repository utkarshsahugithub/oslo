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
    // if(index!==array.length) {
    //     showBanner(index);
    //     index--;
    // } else if (index===0) {
    //     console.log('hello');
    //     foo(index);
    //     index=3;
    //     showBanner(index);
    // }
})