var $win = $(window);
var $greenHand, $blueHand, $orangeLeft, $orangeRight, 
    $pushHand, $pointerHand, $palmHand, $chain, $leftPalm, $rightPalm; 
var $text1, $text2, $text3, $text4, $text5, $text6,
     $text7, $text8, $text9, $text10, $text11, $text12, $text13;

var height = 13042;
var midX = 0;
var midY = 0;
var chainText, chain, pointerHand, pointerText, pushHand;
var text12, text10, text5, text3, text7;

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
    $leftPalm = $('#left-palm');
    $rightPalm = $('#right-palm');

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
    //$text11 = $('#text11');
    $text12 = $('#text12');
    $text13 = $('#text13');
    setCenter();

    //push hand
    // if(distance < 1000){
    //     $left($text6, midX + distance - 1329); 
    //     $left($pushHand, midX + distance - 2145); 

    //     var percent = distance / 1000;
    //     $opacity($text6, percent);
    //     $opacity($pushHand, percent);
        
    //     $top($pushHand, midY + 15);
    //     $top($text6, midY - 7); 
    // } else {
    //     $left($text6, midX - 330);
    //     $left($pushHand, (midX - 145) - distance); 

    //     $opacity($text6, 1);
    //     $opacity($pushHand, 1);

    //     $top($text6, midY - thirdDistance + 330);
    //     $top($pushHand, midY + 15);        
    // }
        //constructor(breakPoint, xSpeed1, ySpeed1, xSpeed2, ySpeed2, xOffset, yOffset, xOffset, yOffset)

        //constructor(startFade, endFade, yOffset, xOffset, theObject){
    chainText = new ScrollObject(5900, -1, -0.333, 0, -0.333, 5700, 2060, -200 , 2060, $('#text11'));
    chain = new ScrollObject(5900, -1, -0.333, -1, -0.333, 3790, 2035, 3791, 2035, $chain);
    pointerHand = new ScrollObject(4200, -1, -0.333, 1, -0.333, 4470, 1415, /*3791*/ -3929, /*2035*/1416, $pointerHand);
    pointerText = new ScrollObject(4200, -1, -0.333, 0, -0.333, 3869, 1400, -330, 1400, $text8);
    pushHand = new ScrollObject(1000, 1, 0, -1, 0, -2240, -15, -240, -15, $pushHand);
    text12 = new FadeObject(5600, 6800, 330, 2180, $text12);
    text10 = new FadeObject(4500, 5500, 330, 1780, $text10);
    text5 = new FadeObject(2100, 3300, 330, 1080, $text5);
    text3 = new FadeObject(1300, 2300, 330, 770, $text3);
    text7 = new FadeObject(1450, 2300, 330, 510, $text7);
});

// https://www.youtube.com/watch?v=nhHqiGCG10E
$win.on('scroll', function(){
    animate();
});

function getOffset(distance, speed1, speed2, offset1){
    return distance * (speed1 - speed2) + offset1;
}

function animate(){
    var distance = $win.scrollTop();
    //distance = 4200;
    //distance = 1000;
    
    // if(pushHand){
    //     console.log('post x: ' + pushHand.getOffsetPostX());
    //     console.log('post Y: ' + pushHand.getOffsetPostY());
    // }
    
    
    //distance = 1000;

    var halfDistance = distance / 2;
    var thirdDistance = distance / 3;
    var threeQuartersDistance = distance * 0.75;
    
    //push hand
    if(distance < 1000){
        $left($text6, midX + distance - 1329); 
        //$left($pushHand, midX + distance - 2145); 

        var percent = distance / 1000;
        $opacity($text6, percent);
        //$opacity($pushHand, percent);
        
        //$top($pushHand, midY + 15);
        $top($text6, midY - 7); 
    } else {
        $left($text6, midX - 330);
        $left($pushHand, (midX - 145) - distance); 

        $opacity($text6, 1);
        $opacity($pushHand, 1);

        $top($text6, midY - thirdDistance + 330);
        $top($pushHand, midY + 15);        
    }
    pushHand.update(distance);

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

    text7.update(distance);

    text3.update(distance);

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
    text5.update(distance);

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

    pointerHand.update(distance);
    pointerText.update(distance);

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
    text10.update(distance);

    chain.update(distance);
    chainText.update(distance);

    text12.update(distance);

    //double flat hand
    // if(distance < 7000){
    //     var left = midX + (3780 - distance);
    //     $left($rightPalm, left);
    //     $left($leftPalm, left);
    //     $left($text13, left + 1920);        
        
    //     var top = midY + 2836 - thirdDistance;
    //     $top($rightPalm, top);
    //     $top($leftPalm, top);
    //     $top($text13, top + 20);
    // } else {        
    //     $left($rightPalm, midX + 3780 - distance);
    //     $left($leftPalm, midX - 199);
    //     $left($text13, midX - 199);

    //     $top($rightPalm, (midY + 2036 - thirdDistance));
    //     $top($leftPalm, midY - thirdDistance + 2056);
    //     $top($text13, midY - thirdDistance + 2056);
    // }
}

class ScrollObject{
    constructor(breakPoint, xSpeed1, ySpeed1, xSpeed2, ySpeed2, xOffset, yOffset, xOffset2, yOffset2, theObject){
        this.breakPoint = breakPoint;
        this.xSpeed1 = xSpeed1;
        this.ySpeed1 = ySpeed1;
        this.xSpeed2 = xSpeed2;
        this.ySpeed2 = ySpeed2;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.theObject = theObject;
        this.xOffset2 = xOffset2;
        this.yOffset2 = yOffset2;
    }
    
    update(scrollDistance){
        if(scrollDistance < this.breakPoint){
            $left(this.theObject,midX + this.xSpeed1 * scrollDistance + this.xOffset);
            $top(this.theObject, midY + this.ySpeed1 * scrollDistance + this.yOffset);

            // if(this.theObject === $pushHand){
            //     console.log('pre left '+ (this.theObject,midX + this.xSpeed1 * scrollDistance + this.xOffset));
            //     console.log('pre top '+ (midY + this.ySpeed1 * scrollDistance + this.yOffset));
            // }
        } else {
            $left(this.theObject, midX + this.xSpeed2 * scrollDistance + this.xOffset2);
            $top(this.theObject, midY + this.ySpeed2 * scrollDistance + this.yOffset2);

            // if(this.theObject === $pushHand){
            //     console.log('post left '+ (this.theObject, midX + this.xSpeed2 * scrollDistance + this.xOffset2));
            //     console.log('post top '+ (midY + this.ySpeed2 * scrollDistance + this.yOffset2));
            // }
        }   
    }

    getOffsetPostX(){
        return this.breakPoint * (this.xSpeed1 - this.xSpeed2) + this.xOffset;
    }

    getOffsetPreX(){
        return this.breakPoint * (this.xSpeed2 - this.xSpeed1) + this.xOffset2;
    }

    getOffsetPostY(){
        return this.breakPoint * (this.ySpeed1 - this.ySpeed2) + this.yOffset;
    }

    getOffsetPreX(){
        return this.breakPoint * (this.ySpeed2 - this.ySpeed1) + this.yOffset2;
    }
}

class FadeObject{
    constructor(startFade, endFade, xOffset, yOffset, theObject){
        this.ySpeed = 0.333;
        this.startFade = startFade;
        this.endFade = endFade;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.theObject = theObject;
        this.range = endFade - startFade;

    }
    // $left($text12, midX - 330);
    // $top($text12, midY - thirdDistance + 2180);

    // if(distance < 5600){
    //     $opacity($text12, 0);
    // }else if(distance < 6800){
    //     var percent = (distance - 5600) / 1200;
    //     $opacity($text12, percent);
    // }else{
    //     $opacity($text12, 1);
    // }
    update(scrollDistance){
        var third = scrollDistance / 3;
        $left(this.theObject, midX - this.xOffset);
        $top(this.theObject, midY - third + this.yOffset);
        if(scrollDistance < this.startFade){
            $opacity(this.theObject, 0);
        }else if(scrollDistance < this.endFade){
            var percent = (scrollDistance - this.startFade) / this.range;
            $opacity(this.theObject, percent);
        }else{
            $opacity(this.theObject, 1);
        }
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