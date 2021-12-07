//Les Tableaux


//exercice1:

let mois = new Array ( 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre','Octobre', 'novembre','décembre');

console.log(mois)

//exercice2:

console.log(mois[2]);

//exercice3:

console.log(mois[4]);

//exercice4:
console.log(mois[7]="août")

//exercice5 et 6:


var départements={ 'Aisne':02,'Nord':59,'Oise':60,'Pas-de-calais':62,'Somme':80};

console.log(départements['Nord']);

//exercice7:

var départements={ 'Aisne':02,'Nord':59,'Oise':60,'Pas-de-calais':62,'Somme':80,'Marne':51};

console.log(départements['Marne']);

//exercice8:

let mois = new Array ( 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre','Octobre', 'novembre','décembre');

var length = mois.length;
for (var i = 0; i < length; i++) {
    console.log(mois[i]);  
}

//exercice9:

var départements={ 'Aisne':02,'Nord':59,'Oise':60,'Pas-de-calais':62,'Somme':80,'Marne':51};

console.log(départements);

//exercice10:

var sayings = new Map();
sayings.set("Aisne", 02);
sayings.set("Nord", 59);
sayings.set("Oise", 60);
sayings.set("Pas-de-calais",62);
sayings.set("Somme", 60);
sayings.set("Marne", 51);


for (var [key, value] of sayings) {
  console.log("le département", key + " a le numéro " + value);
}



