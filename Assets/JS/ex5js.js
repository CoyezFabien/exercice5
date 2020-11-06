function calcul() 
{
    var num1 = document.getElementById('num1').value;
    // getElementById car un relie des ID à une varaible qui est ensuite relier avec le bouton dans le html avec 'value'
    // la value c'est l'attribut relier au texte 
    var num2 = document.getElementById('num2').value;
    var resultat = num1 % num2;
    // le modulo va diviser la variable num 2 et num 1 et va conserver le reste 
    // le reste d'une division c'est le resultat qui restera quand tu auras fait la division ex 50/21 le reste est egal 8 pourquoi 21 +21 =42 de 42 à 50 il reste 8 donc le reste c'est 8 etc.... on peut trouver un reste est égal 0 aussi exemple 50/25=2 mais le reste est égal à 0 car 25*2=50 il n'a pas de reste pour arriver à 50 comme on l'a fait avec 21.
    
    
    // ici on met le signe % car on demande le reste on aurai utilisé le signe / (division) si on aurait demandé le resultat de la division
    alert(resultat);
    // on met une alert car c'était demandé dans l'exercice dedans on veut apparaitre le reste du resultat de la division du coup marque juste le nom de la var qui fait le calcul ici son nom c'est resultat
}


// Number()



