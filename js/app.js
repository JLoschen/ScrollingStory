var $win = $(window);
var $greenHand, $blueHand, $orangeLeft, $orangeRight, 
    $pushHand, $pointerHand, $palmHand, $chain, $leftPalm, $rightPalm; 
var $text1, $text2, $text3, $text4, $text5, $text6,
     $text7, $text8, $text9, $text10, $text11, $text12, $text13;

var height = 13042;
var midX = 0;
var midY = 0;
var chainText, chain, pointerHand, pointerText, pushHand, pinchHand, blueHand, 
    palmHand, orangeLeft, orangeRight;
var text12, text10, text5, text3, text7, pushText, 
    pinchText, blueText, palmText, orangeText;

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

    //constructor(breakPoint, xSpeed1, ySpeed1, xSpeed2, ySpeed2, xOffset, yOffset, xOffset, yOffset)
    //constructor(startFade, endFade, yOffset, xOffset, theObject){
    //orange hands
    // if(distance < 2400){
    //     $left($orangeLeft, midX - 617);
    //     $left($orangeRight, midX + 117);
    //     $left($text4, midX - 170);

    //     var top = midY + 1280 - halfDistance;
    //     $top($orangeLeft, top);
    //     $top($orangeRight, top);
    //     $top($text4, top + 84);
    // }else {
    //     //var overLimit = distance - 2800;
    //     //var overLimit = halfDistance - 1400;
    //     var overLimit = thirdDistance - 933;
    //     $left($orangeLeft, midX - (750 + overLimit));
    //     $left($orangeRight, midX + 250 + overLimit);
    //     $left($text4, midX - 170);

    //     var newTop = midY + halfDistance - 1370 + 30 + 20 + 200;
    //     $top($orangeLeft, newTop);
    //     $top($orangeRight, newTop);
    //     $top($text4, midY - thirdDistance + 964);
    // }
    chainText = new ScrollObject(5900, -1, -0.333, 0, -0.333, 5700, 2060, -200 , 2060, $('#text11'));
    chain = new ScrollObject(5900, -1, -0.333, -1, -0.333, 3790, 2035, 3791, 2035, $chain);
    pointerHand = new ScrollObject(4200, -1, -0.333, 1, -0.333, 4470, 1415, /*3791*/ -3929, /*2035*/1416, $pointerHand);
    pointerText = new ScrollObject(4200, -1, -0.333, 0, -0.333, 3869, 1400, -330, 1400, $text8);
    pushHand = new ScrollObject(1000, 1, 0, -1, 0, -2240, -15, -240, -15, $pushHand);
    pushText = new ScrollObject(1000, 1, 0, 0, -0.333, -1325, 22, -325, 355, $text6);
    pinchHand = new ScrollObject(1800, -1, -0.5, 1, 0.5, 2060, 850, -1540, -950, $greenHand);
    pinchText = new ScrollObject(1800, -1, -0.5, 0, -0.333, 1460, 930, -340, 629, $text1);
    blueHand = new ScrollObject(3000, 0, -0.5, 0, 0.333, -100, 1740, -100, -759, $blueHand);
    blueText = new ScrollObject(3000, 0, -0.5, 0, -0.333, -300, 1750, -300, 1249, $text2);
    palmHand = new ScrollObject(4800, -0.5, -0.5, 0.5, 0.5, 2270, 2500, -2530, -2300, $palmHand);
    palmText = new ScrollObject(4800, -0.5, -0.5, 0, -0.333, 2070, 2420, -330, 1618.4, $text9);
    orangeLeft = new ScrollObject(2400, 0, -0.5, -0.333, 0.5, -630, 1290, 169, -1110, $orangeLeft);
    orangeRight = new ScrollObject(2400, 0, -0.5, 0.333, 0.5, 140, 1290, -659, -1110, $orangeRight);
    orangeText = new ScrollObject(2400, 0, -0.5, 0, -0.333, -160, 1368, -160, 967, $text4);

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
    //distance = 4799;
    // distance = 2399;
    
    //  if(orangeText){
    //      console.log('post x: ' + orangeText.getOffsetPostX());
    //      console.log('post Y: ' + orangeText.getOffsetPostY());

    //     //console.log('pre x: ' + blueHand.getOffsetPreX());
    //     //console.log('pre Y: ' + blueHand.getOffsetPreY());
    // }

    var halfDistance = distance / 2;
    var thirdDistance = distance / 3;
    var threeQuartersDistance = distance * 0.75;

    //orange hands
    if(distance < 2400){
        //$left($orangeLeft, midX - 617);
        //$left($orangeRight, midX + 117);
        //$left($text4, midX - 170);

        var top = midY + 1280 - halfDistance;
        //$top($orangeLeft, top);
        //$top($orangeRight, top);
        //$top($text4, top + 84);
    }else {
        //var overLimit = distance - 2800;
        //var overLimit = halfDistance - 1400;
        var overLimit = thirdDistance - 933;
        //$left($orangeLeft, midX - (750 + overLimit));
        //$left($orangeRight, midX + 250 + overLimit);
        //$left($text4, midX - 170);

        var newTop = midY + halfDistance - 1370 + 30 + 20 + 200;
        //$top($orangeLeft, newTop);
        //$top($orangeRight, newTop);
        //$top($text4, midY - thirdDistance + 964);
    }
    orangeText.update(distance);
    orangeLeft.update(distance);
    orangeRight.update(distance);
    
    //push hand
    if(distance < 1000){
        var percent = distance / 1000;
        $opacity($text6, percent);
        $opacity($pushHand, percent);
    } else {
        $opacity($text6, 1);
        $opacity($pushHand, 1);
    }
    pushHand.update(distance);
    pushText.update(distance);

    pinchText.update(distance);
    pinchHand.update(distance);

    text7.update(distance);

    text3.update(distance);

    
    text5.update(distance);

    blueText.update(distance);
    blueHand.update(distance);

    pointerHand.update(distance);
    pointerText.update(distance);

    palmText.update(distance);
    palmHand.update(distance);
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
            $left(this.theObject, midX + this.xSpeed1 * scrollDistance + this.xOffset);
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

    getOffsetPreY(){
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
    if(element){
        element.css('left', left1 + 'px');
    }else{
        console.log('undefined!');
    }
}

function $top(element, top1){
    if(element){
        element.css('top', top1 + 'px');
    }else{
        console.log('undefined!');
    }
    
}

function $opacity(element, opacity1){
    if(element){
        element.css('opacity', opacity1);
    }else{
        console.log('undefined!');
    }
}



$win.on('resize', function(){
    setCenter();
    animate();
});