var $win = $(window);
var $greenHand, $blueHand, $orangeLeft, $orangeRight, 
    $pushHand, $pointerHand, $palmHand, $chain; 
var $text1, $text2, $text3, $text4, $text5, $text6,
     $text7, $text8, $text9, $text10, $text11, $text12;

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
    $palmHand = $('#palm-hand');
    $chain = $('#chain');

    $text1 = $('#text1');
    $text2 = $('#text2');
    $text3 = $('#text3');
    $text4 = $('#text4');
    $text5 = $('#text5');
    $text6 = $('#text6');
    $text7 = $('#text7');
    $text8 = $('#text8');
    $text9 = $('#text9');
    $text10 = $('#text10');
    $text11 = $('#text11');
    $text12 = $('#text12');
    setCenter();
});

// https://www.youtube.com/watch?v=nhHqiGCG10E
$win.on('scroll', function(){
    animate();
});

function animate(){
    var distance = $win.scrollTop();
    
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
        var left = midX + (4450 - distance);
        $left($pointerHand, left);
        $left($text8, left - 585);
        
        $top($pointerHand, midY);
        $top($text8, midY );
        
    }else {
        var left = midX + distance - 4049;
        $left($pointerHand, left);
        $left($text8, midX - 184);

        $top($pointerHand, midY);
        $top($text8, midY - thirdDistance + 1350);
    }

    //palm hand
    if(distance < 4800){
        var left = midX + (2340 - halfDistance);
        $left($palmHand, left);
        $left($text9, left - 280);        

        var top = midY + 2420 - halfDistance;
        
        $top($palmHand, top + 105);
        $top($text9, top);
    }else {
        var left = midX + halfDistance - 2459;
        $left($palmHand, left);
        $left($text9, midX - 339);

        $top($palmHand, midY + halfDistance - 2275);
        $top($text9, midY - thirdDistance + 1620);
    }

    //text 10
    $left($text10, midX - 330);
    $top($text10, midY - thirdDistance + 1780);

    if(distance < 4500){
        $opacity($text10, 0);
    }else if(distance < 5500){
        var percent = (distance - 4500) / 1000;
        $opacity($text10, percent);
    }else{
        $opacity($text10, 1);
    }

    //chain
    if(distance < 5900){
        var left = midX + (3780 - distance);
        $left($chain, left);
        $left($text11, left + 1920);        
        
        var top = midY + 2036 - thirdDistance;
        $top($chain, top);
        $top($text11, top + 20);
    }else {        
        $left($chain, midX + 3780 - distance);
        $left($text11, midX - 199);

        $top($chain, (midY + 2036 - thirdDistance));
        $top($text11, midY - thirdDistance + 2056);
    }

    //text 12
    $left($text12, midX - 330);
    $top($text12, midY - thirdDistance + 2180);

    if(distance < 5600){
        $opacity($text12, 0);
    }else if(distance < 6800){
        var percent = (distance - 5600) / 1200;
        $opacity($text12, percent);
    }else{
        $opacity($text12, 1);
    }
}

function $left(element, left1){
    //if(element){
        element.css('left', left1 + 'px');
    //}else{
    //    console.log('undefined!');
    //}
        
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