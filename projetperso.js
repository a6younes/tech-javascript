//AUTEUR : ASSAOUCI Younes//


const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.question('Entrer un nombre a trouver : ', (nombremystere) => {
    rl.question('Entrer un nombre (1er essai) : ', (reponse1) => {
        if(reponse1 == nombremystere){
            console.log('BRAVO !');
            rl.close();
        } if(reponse1 != nombremystere) {
            rl.question('Entrer un nombre (2eme essai) : ', (reponse2) => {
                if(reponse2 == nombremystere){
                    console.log('BRAVO');
                    rl.close();
                } if(reponse2 != nombremystere){
                    rl.question('Entrer un nombre (3eme essai) : ', (reponse3) => {
                        if(reponse3 == nombremystere){
                            console.log('BRAVO TU AS EU CHAUD !');
                            rl.close;
                        } else if(reponse3 != nombremystere){
                            console.log('Reessaie -_-');
                            rl.close();
                        }
                    })
                }
            })
        }
        
})


})

