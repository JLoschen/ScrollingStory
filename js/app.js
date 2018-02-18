var $win = $(window);

var midX = 0;
var midY = 0;
var chainText, chain, pointerHand, pointerText, pushHand, pinchHand, blueHand, jet, jetText,
    palmHand, orangeLeft, orangeRight, stone, purpleHand, doubleHandLeft, doubleHandText, $stone;
var fade5, fade4, fade3, fade2, fade1, pushText, fade6, 
    pinchText, blueText, palmText, orangeText, stoneText, footer;

function setCenter(){
    midX = $win.width() / 2;
    midY = $win.height() / 2;
}

$(function(){
    
    setCenter();
    chainText = new ScrollObject(5900, -1, -0.333, 0, -0.333, 5575, 2040, -325 , 2040, $('#chain-text'));
    chain = new ScrollObject(5900, -1, -0.333, -1, -0.333, 3665, 2015, 3665, 2015, $('#chain'));
    pointerHand = new ScrollObject(4200, -1, -0.333, 1, -0.333, 4480, 1395, -3929, 1396, $('#pointer-hand'));
    pointerText = new ScrollObject(4200, -1, -0.333, 0, -0.333, 3875, 1380, -325, 1380, $('#pointer-text'));
    pushHand = new ScrollObject(1000, 1, 0, -1, 0, -2484, 20, -484, 20, $('#push-hand'));
    pushText = new ScrollObject(1000, 1, 0, 0, -0.333, -1325, 22, -325, 355, $('#push-text'));
    pinchHand = new ScrollObject(1800, -1, -0.5, 1, 0.5, 2060, 850, -1540, -950, $('#greenHand'));
    pinchText = new ScrollObject(1800, -1, -0.5, 0, -0.333, 1460, 930, -326, 629, $('#pinch-text'));
    blueHand = new ScrollObject(3000, 0, -0.5, 0, 0.333, -100, 1740, -100, -759, $('#blueHand'));
    blueText = new ScrollObject(3000, 0, -0.5, 0, -0.333, -322, 1750, -322, 1249, $('#blue-hand-text'));
    palmHand = new ScrollObject(4800, -0.5, -0.5, 0.5, 0.5, 2270, 2510, -2530, -2290, $('#palm-hand'));
    palmText = new ScrollObject(4800, -0.5, -0.5, 0, -0.333, 2080, 2430, -320, 1628.4, $('#palm-text'));
    orangeLeft = new ScrollObject(2400, 0, -0.5, -0.333, 0.5, -780, 1290, 19, -1110, $('#orange-left'));
    orangeRight = new ScrollObject(2400, 0, -0.5, 0.333, 0.5, -10, 1290, -809, -1110, $('#orange-right'));
    orangeText = new ScrollObject(2400, 0, -0.5, 0, -0.333, -320, 1360, -320, 959, $('#orange-text'));
    purpleHand = new ScrollObject(8300, -0.5, -0.5, -0.5, 0.5, 4190, 4220, 4190, -4080, $('#purple-hand'));
    doubleHandText = new ScrollObject(8300, -0.5, -0.5, 0, -0.333, 3820, 4190, -330, 2803, $('#double-hand-text'));
    doubleHandLeft = new ScrollObject(8300, -0.5, -0.5, -0.5, 0.5, 3890, 4230, 3890, -4070, $('#double-hand-left'));
    jet = new ScrollObject(9000, 1, 0, 3, 0, -9240, -70, -27240, -70, $('#jet'));
    jetText = new ScrollObject(9000, 1, 0, 0, -0.333, -9320, 35, -320, 3032, $('#jet-text'));
    
    footer = $('#footer');

    fade6 = new FadeObject(6800, 8000, 330, 2640, $('#fade6'));
    fade5 = new FadeObject(5600, 6800, 325, 2180, $('#fade5'));
    fade4 = new FadeObject(4500, 5500, 325, 1780, $('#fade4'));
    fade3 = new FadeObject(2100, 3300, 325, 1080, $('#fade3'));
    fade2 = new FadeObject(1300, 2300, 325, 770, $('#fade2'));
    fade1 = new FadeObject(1450, 2450, 326, 480, $('#fade1'));
    stoneText = new FadeObject(0, 100, 318, 2450, $('#stone-text')); 

    $stone = $('#stone');
    stone = new FadeObject(0, 100, 463, 2340, $stone); 
});

// https://www.youtube.com/watch?v=nhHqiGCG10E
$win.on('scroll', function(){
    animate();
});

function getOffset(distance, speed1, speed2, offset1){
    return distance * (speed1 - speed2) + offset1;
}

function displayOffsets(element){
    if(element){
        console.log('post x: ' + element.getOffsetPostX());
        console.log('post Y: ' + element.getOffsetPostY());

        console.log('pre x: ' + element.getOffsetPreX());
        console.log('pre Y: ' + element.getOffsetPreY());
    }
}

function animate(){
    var distance = $win.scrollTop();
    //distance = 8999; 

     displayOffsets(jet);

    var halfDistance = distance / 2;
    var thirdDistance = distance / 3;
    var threeQuartersDistance = distance * 0.75;

    orangeText.update(distance);
    orangeLeft.update(distance);
    orangeRight.update(distance);
    
    //push hand
    if(distance < 1000){
        var percent = distance / 1000;
        pushText.updateOpacity(percent);
        pushHand.updateOpacity(percent);
    } else {
        pushText.updateOpacity(1);
        pushHand.updateOpacity(1);
    }
    pushHand.update(distance);
    pushText.update(distance);

    pinchText.update(distance);
    pinchHand.update(distance);

    fade1.update(distance);

    fade2.update(distance);

    fade3.update(distance);
    //text10.update(distance);
    fade4.update(distance);

    blueText.update(distance);
    blueHand.update(distance);

    pointerHand.update(distance);
    pointerText.update(distance);

    palmText.update(distance);
    palmHand.update(distance);
    

    chain.update(distance);
    chainText.update(distance);

    fade5.update(distance);
    fade6.update(distance);
    
    stoneText.update(distance);
    stone.update(distance);

    purpleHand.update(distance);
    doubleHandText.update(distance);
    doubleHandLeft.update(distance);
    jet.update(distance);
    jetText.update(distance);

    //stone
    if(distance < 6500){
        $source($stone, 'stone_1b.png');
    }else if(distance < 6800){
        $source($stone, 'stone_2b.png');
    }else if(distance < 7100){
        $source($stone, 'stone_3b.png');
    }else if(distance < 7400){
        $source($stone, 'stone_4b.png');
    }else if(distance < 7700){
        $source($stone, 'stone_5b.png');
    }else if(distance < 8000){
        $source($stone, 'stone_6b.png');
    }
    
     $top(footer, midY + -0.333 * distance + 3630);
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

            //if(this.theObject === $doubleHandText){
            //if(this === jet){
                //console.log('pre left '+ (this.theObject,midX + this.xSpeed1 * scrollDistance + this.xOffset));
                //console.log('pre top '+ (midY + this.ySpeed1 * scrollDistance + this.yOffset));
            //}
        } else {
            $left(this.theObject, midX + this.xSpeed2 * scrollDistance + this.xOffset2);
            $top(this.theObject, midY + this.ySpeed2 * scrollDistance + this.yOffset2);

            // if(this.theObject === $pushHand){
            //     console.log('post left '+ (this.theObject, midX + this.xSpeed2 * scrollDistance + this.xOffset2));
            //     console.log('post top '+ (midY + this.ySpeed2 * scrollDistance + this.yOffset2));
            // }
        }   
    }

    updateOpacity(percent){
        this.theObject.css('opacity', percent);
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

function $rotate(element, degrees){
    if(element){
        element.css('transform', 'rotate('+ degrees+'deg)');
    }else{
        console.log('undefined!');
    }
}

function $source(element, newSource){
    if(element){
        element.attr('src', 'img/Hands/'+newSource);
    }else{
        console.log('undefined!');
    }
}

$win.on('resize', function(){
    setCenter();
    animate();
});