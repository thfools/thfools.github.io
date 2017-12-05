window.onload = function(){
	 var canvas=document.getElementById('myCanvas');
     var ctx=canvas.getContext('2d');
	 ctx.font="bold 15px Arial";
	 ctx.textAlign="end";
	 ctx.textBaseline="middle";
	 ctx.fillStyle="rgb(255,255,255)";
	 ctx.fillText("学习能力:",70,20);
	 
	 ctx.beginPath();
     ctx.moveTo(80,20);
     ctx.lineTo(240,20);
     ctx.strokeStyle="rgb(192,192,192)";
     ctx.lineWidth=10;
     ctx.lineCap="round";
     ctx.stroke();

     ctx.beginPath();
     ctx.moveTo(80,20);
     ctx.lineTo(200,20);
     ctx.strokeStyle="rgb(255,255,255)";
     ctx.lineWidth=10;
     ctx.lineCap="round";
     ctx.stroke();
	 
	 
	
	 ctx.fillText("创新能力:",70,60);
	 ctx.beginPath();
     ctx.moveTo(80,60);
     ctx.lineTo(240,60);
     ctx.strokeStyle="rgb(192,192,192)";
     ctx.lineWidth=10;
     ctx.lineCap="round";
     ctx.stroke();

     ctx.beginPath();
     ctx.moveTo(80,60);
     ctx.lineTo(200,60);
     ctx.strokeStyle="rgb(255,255,255)";
     ctx.lineWidth=10;
     ctx.lineCap="round";
     ctx.stroke();
	 
	 ctx.fillText("团队精神:",70,100);
	 ctx.beginPath();
     ctx.moveTo(80,100);
     ctx.lineTo(240,100);
     ctx.strokeStyle="rgb(192,192,192)";
     ctx.lineWidth=10;
     ctx.lineCap="round";
     ctx.stroke();

     ctx.beginPath();
     ctx.moveTo(80,100);
     ctx.lineTo(210,100);
     ctx.strokeStyle="rgb(255,255,255)";
     ctx.lineWidth=10;
     ctx.lineCap="round";
     ctx.stroke();
	 
	 
	 ctx.fillText("交流能力:",70,140);
	 ctx.beginPath();
     ctx.moveTo(80,140);
     ctx.lineTo(240,140);
     ctx.strokeStyle="rgb(192,192,192)";
     ctx.lineWidth=10;
     ctx.lineCap="round";
     ctx.stroke();

     ctx.beginPath();
     ctx.moveTo(80,140);
     ctx.lineTo(210,140);
     ctx.strokeStyle="rgb(255,255,255)";
     ctx.lineWidth=10;
     ctx.lineCap="round";
     ctx.stroke();
}