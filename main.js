"use strict";
const canvas = document.querySelector(".canvas");
const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");
let painting, color, lineWidth, difX, difY;
canvas.addEventListener("mousedown", (e) => {
  ctx.beginPath();
  difX = e.clientX - dif.left;
  difY = e.clientY - dif.top;
  painting = true;
  color = document.querySelector(".color").value;
  lineWidth = document.querySelector(".range").value;
});
const dibujar = (x1, y1, x2, y2) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
};

canvas.addEventListener("mousemove", (e) => {
  if (painting) {
    dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
    difX = e.clientX - difX.left;
    difY = e.clientY - difY.top;
  }
});

canvas.addEventListener("mouseup", (e) => {
  painting = false;
  ctx.closePath();
});
/* // grosor de la linea:
ctx.lineWidth = "6";
// relleno del dibujo:
ctx.fillStyle = "#2be";
// color de la linea:
ctx.strokeStyle = "#49b";
// dimensiones de la linea:
ctx.strokeRect(50, 50, 400, 200);
// dimensiones del relleno:
ctx.fillRect(20, 10, 400, 200);
// dibujar una linea:
ctx.lineTo(200, 100);
ctx.lineTo(200, 250);
ctx.stroke();
ctx.closePath();
// dibujar una nueva linea:
ctx.beginPath();
ctx.lineTo(150, 100);
ctx.lineTo(150, 250);
ctx.stroke();
ctx.closePath();
// dibujar otra:
ctx.beginPath();
ctx.lineTo(250, 100);
ctx.lineTo(250, 250);
ctx.stroke();
ctx.closePath();
// dibujar un circulo
ctx.beginPath();
ctx.arc(150, 200, 100, 10, 40);
ctx.stroke();
 */
