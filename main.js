var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.image.fromURL('BirthdayImage.jpg',function(Img){
new_image.scaleToWidth(700);
new_image.scaleToHeight(500);
new_image.set({
    top:0,
    left:0
});
canvas.add(new_image);
})	
	
}

function playSound(){
x.play();	
}
