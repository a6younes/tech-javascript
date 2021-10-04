// AUTEUR ASSAOUCI YOUNES //

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Jeu devinette avec choix nombre de tentatives//
// Avec Await et Async //

////////////////////////////////////////////////////////////////////////////////////////////////////////////



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var i = 0;



const chances = () => {
    return new Promise(resolve => {
        rl.question('Entrer un nombre de tentatives :    ', resolve)
    })
    
}

const mystere = () => {
    return new Promise(resolve => {
        rl.question('Entrer un nombre mystere :    ', resolve)
    })
    
}

const jouer = () => {
    return new Promise(resolve => {
        rl.question('Entrer une valeur :    ', resolve)
    })
    
}


const coeur = async() => {
    const nbch = await chances()
    console.log('le nombre de chances est de :     '+ nbch)

    const nbmy = await mystere()
    console.log('le nombre de mystere est :     '+ nbmy)

    
    

    while(i < nbch){
        
        var reponse = await jouer()
        

            if (reponse === nbmy){
                console.log('Bien jouer')
                rl.close()
                break;

            }
            if(reponse != nbmy){
                console.log('Raté, reessai')
                
               
            }
            

        i++;
        if(nbch == i){
            console.log('le nombre de chances est epuisé');
        }
        
    } 
    
    
    
    rl.close();
    
    

}

coeur()