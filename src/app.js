let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let w = canvas.width;
let h = canvas.height;
let width=5;
let aaa = document.getElementById("ooo");
//BUTTONS
let clear = document.getElementById('clear');
clear.addEventListener("click",()=>{ctx.fillRect(0,0,w,h)},false);
let colour = "#000000";
ctx.fillStyle = "#ffffff";
let value;

canvas.addEventListener("mousedown",(event)=>{
	colour = document.getElementById('color').value;
	value = document.getElementById('size').value;
	
	console.log(typeof(value));
	console.log(colour)
	//ctx.fillStyle = colour;
	ctx.lineWidth = value;
	ctx.beginPath();
	ctx.strokeStyle = colour;
	ctx.moveTo(event.offsetX,event.offsetY);
	let flag = 1;
	canvas.addEventListener("mousemove",(event)=>{
		if(flag == 1){
			ctx.lineTo(event.offsetX,event.offsetY);
			ctx.stroke();
			canvas.addEventListener("mouseup",(event)=>{flag=0},false);
		}
	},false)
},false)
ctx.fillRect(0,0,w,h);

let test = document.getElementById('test');
test.addEventListener("change", ()=>{colour = document.getElementById('color').value;alert(colour)},false)
