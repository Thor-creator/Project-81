canvas = document.getElementById("mycanvas");

ctx = canvas.getContext ("2d")
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth =1;
ctx.rect(175, 180, 430, 200)
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(275, 265, 40, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.arc(325, 300, 40, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(375, 265, 40, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(425, 300, 40, 0, 2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(475, 265, 40, 0, 2*Math.PI)
ctx.stroke()

