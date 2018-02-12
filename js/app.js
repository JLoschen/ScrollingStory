var $win = $(window);
var $greenHand, $blueHand, $orangeLeft, $orangeRight, $pushHand; 
var $text1, $text2, $text3, $text4, $text5, $text6;

var height = 13042;
var midX = 0;
var midY = 0;

function setCenter(){
    midX = $win.width() / 2;
    midY = $win.height() / 2;
}

$(function(){
    $greenHand = $('#greenHand');
    $blueHand = $('#blueHand');
    $orangeLeft = $('#orange-left');
    $orangeRight = $('#orange-right');
    $pushHand = $('#push-hand');

    $text1 = $('#text1');
    $text2 = $('#text2');
    $text3 = $('#text3');
    $text4 = $('#text4');
    $text5 = $('#text5');
    $text6 = $('#text6');
    setCenter();
});

// https://www.youtube.com/watch?v=nhHqiGCG10E
$win.on('scroll', function(){
    animate();
});

function animate(){
    var distance = $win.scrollTop();
    //distance = 2399;
    //distance = 2999;
    //distance = 3000;
    var halfDistance = distance / 2;

    var thirdDistance = distance / 3;

    var threeQuartersDistance = distance * 0.75;
    
    //move pinch hand
    if(distance < 1000){
        var left = midX + (1100 - distance); 
        
        $left($greenHand, left + 90);
        
        $left($text1, left - 430);

        var top = midY + (500 - halfDistance);
        $top($greenHand, top );
        
        $top($text1, top + 20);
        
    }else {
        $left($greenHand, midX + distance - 810);

        $top($greenHand, midY + halfDistance - 500)

        $left($text1, midX - 330);
        
        $top($text1, midY - thirdDistance + 353);
    }

    //blue hand
    // if(distance < 1500){
    //     var top = midY + (/*750*/780 - halfDistance);
    //     $top($blueHand, top);
    //     $top($text2, top - 50);

    //     $left($blueHand, midX - 50);
    //     $left($text2, midX - 330);
    // }else {
    //     $top($text2, midY - thirdDistance + /*450*/480);
    //     $top($blueHand, midY + halfDistance - /*750*/720);

    //     $left($blueHand, midX- 50);
    //     $left($text2, midX - 330);
    // }

    //text 3
    $top($text3, midY - thirdDistance + 640);
    $left($text3, midX - 330);

    if(distance < 1450){
        $opacity($text3, 0);
    }else if(distance < 2300){
        var percent = (distance - 1450) / 850;
        $opacity($text3, percent);
    }else{
        $opacity($text3,1);
    }

    //orange hands
    if(distance < 2400){
        var top = midY + /*1030*//*1060*//*1090*/1120 - halfDistance;
        $top($orangeLeft, top);
        $top($orangeRight, top);
        $top($text4, top + 84);

        $left($orangeLeft, midX - 617);
        $left($orangeRight, midX + 117);

        $left($text4, midX - 170);
    }else {
        var newTop = midY + halfDistance - 1370 + 30 + 30 + 30;
        $top($orangeLeft, newTop);
        $top($orangeRight, newTop);

        $top($text4, midY - thirdDistance + /*714*//*744*//*774*/804);

        //var overLimit = distance - 2800;
        //var overLimit = halfDistance - 1400;
        var overLimit = thirdDistance - 933;
        $left($orangeLeft, midX - (750 + overLimit));
        $left($orangeRight, midX + 250 + overLimit);
        
        $left($text4, midX - 170);
    }

    //text 5
    $top($text5, midY - thirdDistance + 890);
    $left($text5, midX - 330);

    if(distance < 2400){
        $opacity($text5, 0);
    }else if(distance < 3200){
        var percent = (distance - 2400) / 800;
        $opacity($text5, percent);
    }else{
        $opacity($text5, 1);
    }

    //blue hand
    if(distance < 3000){
        var top = midY + (/*750*//*780*/1600 - halfDistance);
        $top($blueHand, top);
        $top($text2, top - 50);
        // console.log('top ' + top);
        // console.log('top text' + (top - 50));

        $left($blueHand, midX - 50);
        $left($text2, midX - 330);
    }else {
        $top($text2, midY - thirdDistance + /*450*/1050);
        $top($blueHand, midY + halfDistance - /*750*/1400);
        // console.log('hand top ' + (midY + halfDistance - /*750*/1400));
        // console.log('text top ' + (midY - thirdDistance + /*450*/1050));
    

        $left($blueHand, midX- 50);
        $left($text2, midX - 330);
    }


    //push hand
    //console.log(distance);
    if(distance < /*2800*/1500){
        //var top = midY + (1550 - halfDistance);
        //$top($pushHand, top);
        //$top($text6, top - 50);
        $top($text6, midY /*- 13*/- /*40*/10); //13 = (2800/3) + 920
        //console.log('text top' + (midY /*- 13*/ - 40));

        //$left($pushHand, midX - 50);
        //$left($text6, midX + halfDistance - 1080); //1400 - x = -330
        $left($text6, midX + threeQuartersDistance - 1454); //1400 - x = -330
        //console.log('text left' + (midX + threeQuartersDistance - 1454));
    } else {
        //$top($text6, midY - thirdDistance + /*920*//*950*/980);
        $top($text6, midY - thirdDistance + /*920*//*950*//*460*/490);
        //console.log('text top' + (midY - thirdDistance + 490));
        // $top($text6, midY - thirdDistance + 450);
        // $top($text4, midY - thirdDistance + 714);
        // $top($pushHand, midY + halfDistance - 750);

        // $left($pushHand, midX- 50);
        $left($text6, midX - 330);
        //console.log('text left' + (midX - 330));
        //console.log('left ' + (midX - 330));
    }
}

function $left(element, left1){
    element.css('left', left1 + 'px');
}

function $top(element, top1){
    element.css('top', top1 + 'px');
}

function $opacity(element, opacity1){
    element.css('opacity', opacity1);
}

$win.on('resize', function(){
    setCenter();
    animate();
});