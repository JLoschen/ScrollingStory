var $win = $(window);
var $greenHand, $blueHand, $orangeLeft, $orangeRight, $pushHand, $pointerHand; 
var $text1, $text2, $text3, $text4, $text5, $text6, $text7, $text8;

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
    $pointerHand = $('#pointer-hand');

    $text1 = $('#text1');
    $text2 = $('#text2');
    $text3 = $('#text3');
    $text4 = $('#text4');
    $text5 = $('#text5');
    $text6 = $('#text6');
    $text7 = $('#text7');
    $text8 = $('#text8');
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
    //distance = 4200;
    var halfDistance = distance / 2;

    var thirdDistance = distance / 3;

    var threeQuartersDistance = distance * 0.75;
    
    //push hand
    if(distance < 1000){
        $left($text6, midX + distance - 1329); 
        $left($pushHand, midX + distance - 2145); 

        var percent = distance / 1000;
        $opacity($text6, percent);
        $opacity($pushHand, percent);
        
        $top($pushHand, midY + 15);
        $top($text6, midY - 7); 
    } else {
        $left($text6, midX - 330);
        $left($pushHand, (midX - 145) - distance); 

        $opacity($text6, 1);
        $opacity($pushHand, 1);

        $top($text6, midY - thirdDistance + 330);
        $top($pushHand, midY + 15);        
    }

    //move pinch hand
    if(distance < 1800){
        var left = midX + (1999 - distance);
        $left($greenHand, left);
        $left($text1, left - 530);

        var top = midY + (910 - halfDistance);
        $top($greenHand, top);
        $top($text1, top + 20);
    }else {
        $left($greenHand, midX + distance - 1600);
        $left($text1, midX - 330);
        
        $top($greenHand, midY + halfDistance - 890);
        $top($text1, midY - thirdDistance + 635);
    }

    //text 7
    $left($text7, midX - 330);
    $top($text7, midY - thirdDistance + 510);

    if(distance < 1450){
        $opacity($text7, 0);
    }else if(distance < 2300){
        var percent = (distance - 1450) / 850;
        $opacity($text7, percent);
    }else{
        $opacity($text7,1);
    }

    //text 3
    $left($text3, midX - 330);
    $top($text3, midY - thirdDistance + 770);

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
        $left($orangeLeft, midX - 617);
        $left($orangeRight, midX + 117);
        $left($text4, midX - 170);

        var top = midY + 1280 - halfDistance;
        $top($orangeLeft, top);
        $top($orangeRight, top);
        $top($text4, top + 84);
    }else {
        //var overLimit = distance - 2800;
        //var overLimit = halfDistance - 1400;
        var overLimit = thirdDistance - 933;
        $left($orangeLeft, midX - (750 + overLimit));
        $left($orangeRight, midX + 250 + overLimit);
        $left($text4, midX - 170);

        var newTop = midY + halfDistance - 1370 + 30 + 20 + 200;
        $top($orangeLeft, newTop);
        $top($orangeRight, newTop);
        $top($text4, midY - thirdDistance + 964);
    }

    //text 5
    $left($text5, midX - 330);
    $top($text5, midY - thirdDistance + 1080);

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
        $left($blueHand, midX - 50);
        $left($text2, midX - 330);

        var top = midY + (1800 - halfDistance);
        $top($blueHand, top);
        $top($text2, top - 50);
    }else {
        $left($blueHand, midX- 50);
        $left($text2, midX - 330);

        $top($text2, midY - thirdDistance + 1250);
        $top($blueHand, midY + halfDistance - 1200);
    }

    //pointer hand
    if(distance < 4200){
        var left = midX + (4350 - distance);
        $left($pointerHand, left);
        $left($text8, left - 335);

        //var top = midY + (1800 - halfDistance);
        $top($pointerHand, midY);
        $top($text8, midY + 45);
    }else {
        var left = midX + distance - 4049;
        $left($pointerHand, left);
        $left($text8, midX - 184);

        $top($pointerHand, midY);
        $top($text8, midY - thirdDistance + 1445);
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