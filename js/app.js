var $win = $(window);
var $greenHand, $blueHand; 
var $text1, $text2, $text3;

var height = 13042;
var distanceToCenter = 0;
var midScreenY = 0;

function setCenter(){
    distanceToCenter = $win.width() / 2;
    midScreenY = $win.height() / 2;
}

$(function(){
    $greenHand = $('#greenHand');
    $blueHand = $('#blueHand');

    $text1 = $('#text1');
    $text2 = $('#text2');
    $text3 = $('#text3');
    setCenter();
});

// https://www.youtube.com/watch?v=nhHqiGCG10E
$win.on('scroll', function(){
    animate();
});

function animate(){
    var distance = $win.scrollTop();
    //console.log(distance);
    //move pinch hand
    //distance = 1500;
    if(distance < 1000){
        var left = (distanceToCenter) + (1100 - distance); 
        
        $left($greenHand, left + 90);
        
        $left($text1, left - 430);

        var top = (midScreenY) + (500 - distance / 2);
        $top($greenHand, top );
        
        $top($text1, top + 20);
        
    }else /*if(distance < 2600)*/{
        $left($greenHand, distanceToCenter + (distance - 810));

        $top($greenHand, (midScreenY) + (distance / 2 - 520) + 20)

        $left($text1, distanceToCenter - 330);
        
        $top($text1, midScreenY - (distance - 1000) / 3 + 20);
    }

    //blue hand
    if(distance < 1500){
        var top = (midScreenY) + (750 - distance / 2);
        $top($blueHand, top);
        $top($text2, top - 50);

        $left($blueHand, distanceToCenter - 50);
        $left($text2, distanceToCenter - 330);
    }else {
        $top($text2, (midScreenY) - ((distance - 1000) / 3) + 117);
        $top($blueHand, (midScreenY) + (distance / 2 - 750));

        var left = distanceToCenter - 50; 
        $left($blueHand, left);
        $left($text2, left - 280);
    }

    //text 3
    $top($text3, (midScreenY) - ((distance - 1000) / 3) + 247);
    $left($text3, distanceToCenter - 330);

    if(1500 < distance && distance < 2300){
        var percent = (distance - 1500) / 800;
        $text3.css('opacity', percent);
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