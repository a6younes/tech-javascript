//############################################################################################//
//auteur : ASSAOUCI Younes//
// date creation : 25/09/21//
// script : help2.js//
// permet de creer des couples a partir d'un nombre determiné d'hommes et de femmes//
//############################################################################################//


function min (a ,b ) {
    if(a>b){
        return b;
    }
    else{
        return a;
    }
}




const readline = require('readline');

//Le readlinemodule fournit une interface pour lire les données d'un flux lisible //



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('nb homme ? ', (answer1) => {
    rl.question('nb femme ? ', (answer2) => {
        var result = min(answer1,answer2);  // Prend le minimum et compte le nombre de couples avec //
        console.log(`Le nombre de couple est de : ${'👫'.repeat (result)} `);
        rl.close();
    });
});
