$(document).ready(function() {
    var array = $(".slide");
    let rightBtn = $(".right");
    let leftBtn = $('.left');
    let circle = $(".circle");
    let index = 0;
    
    rightBtn.on('click', () => {
        index++;
        if(index<array.length) {
            $(".slide").children().removeClass("active").addClass("inactive");
            $("#slide"+[index+1]).children().addClass("active").removeClass("inactive");
        } else if (index===array.length) {
            index=0;
            $(".slide").children().removeClass("active").addClass("inactive");
            $("#slide"+[index+1]).children().addClass("active").removeClass("inactive");
        }
    })
    leftBtn.on('click', () => {
        index--;
        if(index<0){
            // console.log(index);
            $(".slide").children().removeClass("active").addClass("inactive");
            $("#slide"+[array.length]).children().addClass("active").removeClass("inactive");
            index=2;
        }
        else {
            // console.log(index);
            $(".slide").children().removeClass("active").addClass("inactive");
            $("#slide"+[index+1]).children().addClass("active").removeClass("inactive");
        }
    })
    for(let i=0; i<circle.length; i++) {
        $(circle[i]).on('click', () => {
            // console.log(circle[i]);
            // console.log($("#slide"+[i+1]));
            $(".slide").children().removeClass("active").addClass("inactive");
            $("#slide"+[i+1]).children().addClass("active").removeClass("inactive");
        })
    }

    setInterval(() => {
        if(index<2) {
            $(".slide").children().removeClass("active").addClass("inactive");
            $("#slide"+[index+1]).children().addClass("active").removeClass("inactive");
            index++;
        } else {
            $(".slide").children().removeClass("active").addClass("inactive");
            $("#slide"+[index+1]).children().addClass("active").removeClass("inactive");
            index=0;
        }
    }, 2000);
})