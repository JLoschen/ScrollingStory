var $win = $(window);
var $greenHand, $blueHand, $orangeLeft, $orangeRight; 
var $text1, $text2, $text3, $text4;

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
        var left = (distanceToCenter) + (1100 - distance); 
        
        $left($greenHand, left + 90);
        
        $left($text1, left - 430);

        var top = (midScreenY) + (500 - halfDistance);
        $top($greenHand, top );
        
        $top($text1, top + 20);
        
    }else /*if(distance < 2600)*/{
        $left($greenHand, distanceToCenter + (distance - 810));

        $top($greenHand, (midScreenY) + (halfDistance - 520) + 20)

        $left($text1, distanceToCenter - 330);
        
        $top($text1, midScreenY - (distance - 1000) / 3 + 20);
    }

    //blue hand
    if(distance < 1500){
        var top = (midScreenY) + (750 - halfDistance);
        $top($blueHand, top);
        $top($text2, top - 50);

        $left($blueHand, distanceToCenter - 50);
        $left($text2, distanceToCenter - 330);
    }else {
        $top($text2, (midScreenY) - ((distance - 1000) / 3) + 117);
        $top($blueHand, (midScreenY) + (halfDistance - 750));

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


    // $top($text4, (midScreenY) - ((distance - 1000) / 3) + 297);
    // $left($text4, distanceToCenter - 220);

    //orange hands
    if(distance < 2800){
        //var top = (midScreenY) + (750 - halfDistance) + 350;
        var top = midScreenY + 1100 - halfDistance;
        $top($orangeLeft, top);
        $top($orangeRight, top);
        $top($text4, top + 80);

        $left($orangeLeft, distanceToCenter - 640);
        $left($orangeRight, distanceToCenter + 150);
        $left($text4, distanceToCenter - 170);
    }else {
        var newTop = (midScreenY) + (halfDistance - 1700);
        $top($orangeLeft, newTop);
        $top($orangeRight, newTop);

        $top($text4, (midScreenY) - ((distance - 1000) / 3) + 381);
        

        //var overLimit = distance - 2800;
        //var overLimit = halfDistance - 1400;
        var overLimit = thirdDistance - 933;
        //distanceToCenter + (distance - 810));
        $left($orangeLeft, distanceToCenter - (640 + overLimit));
        //$left($orangeRight, distanceToCenter + (distance - 810));
        $left($orangeRight, distanceToCenter + 150 + overLimit);
        
        $left($text4, distanceToCenter - 170);
        // var left = distanceToCenter - 50; 
        // $left($orangeLeft, left);
        // $left($orangeRight, left);
        //$left($text4, left - 280);
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