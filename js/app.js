var $win = $(window);
var $greenHand, $blueHand, $orangeLeft, $orangeRight, $pushHand; 
var $text1, $text2, $text3, $text4, $text5, $text6, $text7;

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
    $text7 = $('#text7');
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
    //distance = 999;
    var halfDistance = distance / 2;

    var thirdDistance = distance / 3;

    var threeQuartersDistance = distance * 0.75;
    
    //push hand
    if(distance < 1000){
        //var top = midY + (1550 - halfDistance);
        $top($pushHand, midY + 15);
        //$top($text6, top - 50);
        $top($text6, midY - 7); 
        //console.log('text top ' + (midY - 7));

        var percent = distance / 1000;
        //$opacity($text6, distance / 1000);
        $opacity($text6, percent);
        $opacity($pushHand, percent);
        //$left($pushHand, midX - 50);
        //$left($text6, midX + halfDistance - 1080); //1400 - x = -330
        //$left($text6, midX + threeQuartersDistance - 1079); //1400 - x = -330
        $left($text6, midX + distance - 1329); 
        $left($pushHand, midX + distance - 2145); 
        //console.log('text left' + (midX + distance - 1329));
    } else {
       
        $top($text6, midY - thirdDistance + 330);
        //console.log('text top' + (midY - thirdDistance + 330));
        // $top($text6, midY - thirdDistance + 450);
        
        $opacity($text6, 1);
        $opacity($pushHand, 1);
        // $top($pushHand, midY + halfDistance - 750);

        $top($pushHand, midY + 15);
        // $left($pushHand, midX- 50);
        $left($text6, midX - 330);

        var overLimit = 1000 - distance;
        //$left($pushHand, midX + overLimit - 2145); 
        $left($pushHand, (midX + 1000 - 2145) + overLimit); 
        //console.log('text left ' + (midX - 330));
    }

    //move pinch hand
    if(distance < 1800){
        var left = midX + (1909 - distance); 
        
        $left($greenHand, left + 90);
        //console.log('green hand left ' + (left + 90));

        $left($text1, left - 440);
        

        var top = midY + (910 - halfDistance);
        $top($greenHand, top );
        //console.log('green hand top ' + (top));

        //console.log('text lef ' + (left - 440));
        
        $top($text1, top + 20);
        //console.log('text 1 top ' + (top + 20));
        
    }else {
        $left($greenHand, midX + distance - 1600);
        //console.log('green hand left ' + (midX + distance - 1600));

        $top($greenHand, midY + halfDistance - 890);
        //console.log('green hand top ' + (midY + halfDistance - 890));

        $left($text1, midX - 330);
        //console.log('text left' + (midX - 330));
        
        $top($text1, midY - thirdDistance + 635);
        //console.log('text top' + (midY - thirdDistance + 635));
    }

    //text 7
    $top($text7, midY - thirdDistance + 510);
    $left($text7, midX - 330);

    if(distance < 1450){
        $opacity($text7, 0);
    }else if(distance < 2300){
        var percent = (distance - 1450) / 850;
        $opacity($text7, percent);
    }else{
        $opacity($text7,1);
    }

    //text 3
    $top($text3, midY - thirdDistance + 770);
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
        var top = midY + 1280 - halfDistance;
        $top($orangeLeft, top);
        $top($orangeRight, top);
        $top($text4, top + 84);

        $left($orangeLeft, midX - 617);
        $left($orangeRight, midX + 117);

        $left($text4, midX - 170);
    }else {
        var newTop = midY + halfDistance - 1370 + 30 + 20 + 200;
        $top($orangeLeft, newTop);
        $top($orangeRight, newTop);

        $top($text4, midY - thirdDistance + 964);

        //var overLimit = distance - 2800;
        //var overLimit = halfDistance - 1400;
        var overLimit = thirdDistance - 933;
        $left($orangeLeft, midX - (750 + overLimit));
        $left($orangeRight, midX + 250 + overLimit);
        
        $left($text4, midX - 170);
    }

    //text 5
    $top($text5, midY - thirdDistance + 1080);
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
        var top = midY + (1800 - halfDistance);
        $top($blueHand, top);
        $top($text2, top - 50);

        $left($blueHand, midX - 50);
        $left($text2, midX - 330);
    }else {
        $top($text2, midY - thirdDistance + 1250);
        $top($blueHand, midY + halfDistance - 1200);
    
        $left($blueHand, midX- 50);
        $left($text2, midX - 330);
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