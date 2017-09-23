var canvas=document.getElementById('sample');
var ctx= canvas.getContext('2d');

ctx.beginPath();
ctx.rect(10,20,50,100);
ctx.strokeStyle='#F00';
ctx.fillStyle='#604';
ctx.stroke();
ctx.fill();