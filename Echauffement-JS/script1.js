//les fonctions

//exercice1

function testNum(a) {
    let result;
    if (a > 0) {
      result = 'true';
    } else {
      result ='false';
    }
    return result;
  }
  
  console.log(testNum(5));

  //exercice2

function hola(text){
    return text;
}

console.log(hola ("salut"));

//exercice3

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));

//exercice4
const number=5;

if (number>5){
  console.log("Le premier nombre est plus grand si le premier nombre est plus grand que le deuxième");
}
else if(number<5)
{
  console.log("Le premier nombre est plus petit si le premier nombre est plus petit que le deuxième"
    );
}
else(number==5)
 { 
   console.log("Les deux nombres sont identiques si les deux nombres sont égaux");}

//exercice5

var str = "hello";
var int = 21;


console.log(str+int)

//exercice6

const prenom="jean";
const nom="durand";
const age="25";


console.log("bonjour "+nom+ prenom+", tu as "+age+"ans");

//exercice7



//exercice8

const array1 = [15, 2, 3];
const reducer = (previousValue, currentValue) => previousValue + currentValue;


console.log(array1.reduce(reducer));

