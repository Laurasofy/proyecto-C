//capturar los Botones 

const btnRojo =document.getElementById("btnRojo");
const btnMarron = document.getElementById("btnmarron");
const btnAzul = document.getElementById("btnazul");
const btnBorrar = document.getElementById("btnborrar");
const fondo = localStorage.getItem('fondo');


//generar los eventos alos botones

btnRojo.addEventListener("click",()=>{
localStorage.setItem('fondo','rojo');

document.body.style.background=fondo;
});

btnMarron.addEventListener("click",()=>{
localStorage.setItem('fondo','marron');
localStorage.setItem('nombre','sandra');
});


btnAzul.addEventListener("click",()=>{
localStorage.setItem('fondo','azul');
});

btnBorrar.addEventListener("click",()=>{
localStorage.removeItem('fondo');
});


