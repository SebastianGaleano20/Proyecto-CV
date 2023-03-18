document.getElementById('buttonID').onclick = function (){
    console.log('Mostrando idiomas')
    document.getElementById('verIdiomas').style.display='block' 
}
document.getElementById('ocult').addEventListener('click', function(){
    document.getElementById('info').style.display ='none'
})

document.getElementById('fondo').addEventListener('click', function(){
    document.body.style.backgroundColor = ('#138080')
})

function mOver(obj) {
    obj.innerHTML = "Analisis de laboratorio / Capacitacion en tecnicas de aplicado"
  }
  function mOut(obj) {
    obj.innerHTML = "Ver tecnicas"}

    document.getElementById("myBtn").addEventListener("click", function() {
        alert("Cv actualizado Marzo 2023!");
      });