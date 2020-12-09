$(document).ready(function() {
    $('.carousel img').not(".active").hide();
    // $(".slide").each(function(index, element) {
    //     // $(this).find('img').show();
    //     setTimeout(() => {  
    //         console.log(index + ": " + $(this).html());
    //     }, 5000);
    // })
    function foo(time, element) {
        setTimeout(() => {
            $(element).addClass(".active");
            element = $(element).next();
            console.log(element);
        }, time);
        time += 1000;
        foo(time, element)
    }

    var array = $(".slide").toArray();
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        var time = 1000;
        foo(time, element);
        // console.log(element);
    }
})