//auteur : ASSAOUCI Younes//


const readline = require('readline');

//Le readlinemodule fournit une interface pour lire les données d'un flux lisible //



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('nb homme ? ', (answer1) => {
    rl.question('nb femme ? ', (answer2) => {
        var result = ~~(((+answer1) + (+answer2))/2);   // ligne divisant le resultat de l'addition par 2 et obtenir un nombre entier.
        console.log(`Le nombre de couple est de : ${'👫'.repeat (result)} `);
        rl.close();
    });
});