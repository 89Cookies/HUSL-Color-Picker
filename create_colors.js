window.onload = function() {
    var canvas = document.getElementById("colors");
    var context = canvas.getContext("2d");
    
    var pixel = context.createImageData(1,1);
    var d = pixel.data;
    for ( x=0 ; x<360 ; x++ ) {
        for ( y=0 ; y<100 ; y++ ) {
            var c = root.husl( x, y, 50 );

            context.fillStyle = c;
            context.fillRect( x, y, 1, 1 );
        }
    }
}

