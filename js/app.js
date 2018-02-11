var $win = $(window);
var $greenHand; 
var $text1; 
var height = 13042;
var distanceToCenter = 0;

$(function(){
    // console.log('ready!');
    $greenHand = $('#greenHand');
    $text1 = $('#text1');  
    distanceToCenter = $win.width() / 2;
    console.log(distanceToCenter);
});

// https://www.youtube.com/watch?v=nhHqiGCG10E

$win.on('scroll', function(){
    var distance = $win.scrollTop();

    console.log('distance ' + distance);
    
    //move hand
    if(distance < 1000){
        //var left = parseInt($greenHand.css('left')) + 2;
        //var left = distanceToCenter - distance;
        var left = (distanceToCenter + 100) + (1000 - distance); 
        $greenHand.css('left', left + 'px');
        //console.log(left);
    }else if(distance < 2000){
        var left = (distanceToCenter + 100) + (distance - 1000);
        $greenHand.css('left', left + 'px');
    }
    
    //console.log($greenHand);
    //console.log(left);
});

$win.on('resize', function(){
    distanceToCenter = $win.width() / 2;
});