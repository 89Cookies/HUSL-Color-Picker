function relMouseCoords(event){
    var totalOffsetX = 0;
    var totalOffsetY = 0;
    var canvasX = 0;
    var canvasY = 0;
    var currentElement = this;

    do{
        totalOffsetX += currentElement.offsetLeft;
        totalOffsetY += currentElement.offsetTop;
    }
    while(currentElement = currentElement.offsetParent)

    canvasX = event.pageX - totalOffsetX;
    canvasY = event.pageY - totalOffsetY;

    return {x:canvasX, y:canvasY}
}

window.onload = function() {
    // create color palette
    var canvas = document.getElementById("colors");
    var context = canvas.getContext("2d");
    
    var pixel = context.createImageData(1,1);
    var d = pixel.data;
    for ( x=0 ; x<=360 ; x++ ) {
        for ( y=0 ; y<=100 ; y++ ) {
            var c = $.husl.husl( x, 100 - y, 50 );

            context.fillStyle = c;
            context.fillRect( x, y, 1, 1 );
        }
    }
    
    // attach click event
    canvas.addEventListener( "click", on_color_choice, false );
    
    //
    HTMLCanvasElement.prototype.relMouseCoords = relMouseCoords;
}

// onclick inside canvas#colors
function on_color_choice(event) {
    var canvas = document.getElementById("colors");
    coords = canvas.relMouseCoords(event);
    
    var cur_color = document.getElementById("current_color");
    var context = cur_color.getContext("2d");
    
    context.fillStyle = $.husl.husl( coords.x, 100 - coords.y, 50 );
    context.fillRect( 0, 0, 50, 50 );
}


