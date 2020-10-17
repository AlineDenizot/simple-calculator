  //Affiche l'opération souhaité
const controls = document.querySelectorAll('.control');

for (let i = 0; i < controls.length; i++){
    controls[i].addEventListener('click', function (e){
        e.preventDefault();
        afficher(this.innerHTML);
    })
}

 function afficher(content) { 
     document.getElementById("result").value+=content;
 }
 

 //Recupère l'opération affichée et renvoit son résultat
const calculResult = document.getElementById('submit');

calculResult.onclick = function (e) {
    e.preventDefault();
    let display = document.getElementById('result');
    let calcul = display.value;
    let result = eval(calcul);
    display.value = result;
}
 

 //Efface le résultat ou la selection en cours
 const resetBtn = document.getElementById('reset');
 
 resetBtn.onclick = function (e) { 
     e.preventDefault();
     document.getElementById('result').value = "" 
 } 

 //Efface le dernier chiffre
 const resetOneBtn = document.getElementById('reset-one');
 
 resetOneBtn.onclick = function (e) { 
     e.preventDefault();
     let display = document.getElementById('result');
    let calcul = display.value;
    let result = calcul.slice(0, -1);
    display.value = result;
 } 



    



