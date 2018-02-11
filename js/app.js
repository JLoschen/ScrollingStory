var $win = $(window);
var $greenHand; 
var $text1; 
var height = 13042;
var distanceToCenter = 0;
var midScreenY = 0;

function setCenter(){
    distanceToCenter = $win.width() / 2;
    midScreenY = $win.height() / 2;
}

$(function(){
    $greenHand = $('#greenHand');
    $text1 = $('#text1');  
    setCenter();
});

// https://www.youtube.com/watch?v=nhHqiGCG10E

$win.on('scroll', function(){
    animate();
});

function animate(){
    var distance = $win.scrollTop();

    //move hand
    if(distance < 1000){
        //var left = parseInt($greenHand.css('left')) + 2;
        //var left = distanceToCenter - distance;
        var left = (distanceToCenter + 100) + (1000 - distance); 
        $greenHand.css('left', left + 'px');
        $text1.css('left', (left - 500) + 'px');

        var top = (midScreenY) + (500 - distance / 2);
        $greenHand.css('top', top + 'px');
        $text1.css('top', (top +20) + 'px');
    }else if(distance < 2600){
        var left = (distanceToCenter + 100) + (distance - 1000);
        $greenHand.css('left', left + 'px');

        var top = (midScreenY) + (distance / 2 - 500);
        $greenHand.css('top', top + 'px');


        //var top2 = (midScreenY) + (500 - distance / 3);
        //var left = (distanceToCenter + 100) + (1000 - distance); 
        $text1.css('left', (distanceToCenter - 400) + 'px');
        
        var overLimit = distance - 1000;
        var top2 = (midScreenY) - (overLimit / 3);
        $text1.css('top', (top2 + 20)  + 'px');
    }
}

$win.on('resize', function(){
    setCenter();
});