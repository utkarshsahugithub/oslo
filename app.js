$(document).ready(function() {
    var array = $(".slide");
    let rightBtn = $(".right");
    let leftBtn = $('.left');
    let circle = $(".circle");
    let index = 0;
    var timingVariable;
    
    rightBtn.on('click', () => {
        clearInterval(timingVariable);
        timingVariable = null;
        index++;
        if(index<array.length) {
            $(".slide").children().removeClass("active").addClass("inactive");
            $("#slide"+[index+1]).children().addClass("active").removeClass("inactive");
        } else if (index===array.length) {
            index=0;
            $(".slide").children().removeClass("active").addClass("inactive");
            $("#slide"+[index+1]).children().addClass("active").removeClass("inactive");
        }
        if(timingVariable == null) timingFunction();
    })
    leftBtn.on('click', () => {
        clearInterval(timingVariable);
        timingVariable = null;
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
        if(timingVariable == null) timingFunction();
    })
    function changeDotColor(i) {
        for(let j=0; j<circle.length; j++) {
            $(circle[j]).removeClass('circleColor');
        }
        $(circle[i]).addClass('circleColor');
    }
    
    for(let i=0; i<circle.length; i++) {
        $(circle[i]).on('click', () => {
            // console.log(circle[i]);
            // console.log($("#slide"+[i+1]));
            clearInterval(timingVariable);
            timingVariable = null;
            $(".slide").children().removeClass("active").addClass("inactive");
            $("#slide"+[i+1]).children().addClass("active").removeClass("inactive");
            if(timingVariable == null) timingFunction();
            changeDotColor(i);
        })
    }
    function timingFunction() {
        timingVariable = setInterval(() => {
            if(index<2) {
                $(".slide").children().removeClass("active").addClass("inactive");
                $("#slide"+[index+1]).children().addClass("active").removeClass("inactive");
                changeDotColor(index);
                index++;
            } else {
                $(".slide").children().removeClass("active").addClass("inactive");
                $("#slide"+[index+1]).children().addClass("active").removeClass("inactive");
                changeDotColor(index);
                index=0;
            }
        }, 2000);
    }
    timingFunction();
})