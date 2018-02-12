var $win = $(window);
var $greenHand, $blueHand, $orangeLeft, $orangeRight; 
var $text1, $text2, $text3, $text4;

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

    $text1 = $('#text1');
    $text2 = $('#text2');
    $text3 = $('#text3');
    $text4 = $('#text4');
    setCenter();
});

// https://www.youtube.com/watch?v=nhHqiGCG10E
$win.on('scroll', function(){
    animate();
});

function animate(){
    var distance = $win.scrollTop();
    //distance = 2800;
    var halfDistance = distance / 2;

    var thirdDistance = distance / 3;
    
    //move pinch hand
    if(distance < 1000){
        var left = midX + (1100 - distance); 
        
        $left($greenHand, left + 90);
        
        $left($text1, left - 430);

        var top = midY + (500 - halfDistance);
        $top($greenHand, top );
        
        $top($text1, top + 20);
        
    }else /*if(distance < 2600)*/{
        $left($greenHand, midX + (distance - 810));

        $top($greenHand, midY + halfDistance - 500)

        $left($text1, midX - 330);
        
        $top($text1, midY - (distance - 1000) / 3 + 20);
    }

    //blue hand
    if(distance < 1500){
        var top = midY + (750 - halfDistance);
        $top($blueHand, top);
        $top($text2, top - 50);

        $left($blueHand, midX - 50);
        $left($text2, midX - 330);
    }else {
        $top($text2, midY - ((distance - 1000) / 3) + 117);
        $top($blueHand, midY + (halfDistance - 750));

        $left($blueHand, midX- 50);
        $left($text2, midX - 330);
    }

    //text 3
    $top($text3, midY - ((distance - 1000) / 3) + 247);
    $left($text3, midX - 330);

    if(1500 < distance && distance < 2300){
        var percent = (distance - 1500) / 800;
        $text3.css('opacity', percent);
    }

    //orange hands
    if(distance < 2800){
        var top = midY + 1100 - halfDistance;
        $top($orangeLeft, top);
        $top($orangeRight, top);
        $top($text4, top + 80);

        $left($orangeLeft, midX - 640);
        $left($orangeRight, midX + 150);
        $left($text4, midX - 170);
    }else {
        var newTop = midY + (halfDistance - 1700);
        $top($orangeLeft, newTop);
        $top($orangeRight, newTop);

        $top($text4, midY - ((distance - 1000) / 3) + 381);
        //var overLimit = distance - 2800;
        //var overLimit = halfDistance - 1400;
        var overLimit = thirdDistance - 933;
        $left($orangeLeft, midX - (640 + overLimit));
        $left($orangeRight, midX + 150 + overLimit);
        
        $left($text4, midX - 170);
    }

    if(distance < 3100){

    }else{

    }
}

function $left(element, left1){
    element.css('left', left1 + 'px');
}

function $top(element, top1){
    element.css('top', top1 + 'px');
}

$win.on('resize', function(){
    setCenter();
    animate();
});