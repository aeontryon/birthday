var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Imge.fromURL('hOye.gif', function(Img) {
      block_image_object = hOye.gif;


        block_image_object .scaleToWidth(700);
        block_image_object.scaleToHight(510);
        block_image_object.set({
            top:0,
            left:0
        });
        canvas.add(block_image_object);
    })
	
}

function playSound(){
	x.play();
 
}
