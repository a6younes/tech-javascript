
//Definition

function forEach(t, fonct) {
    for (let i = 0; i < t.length; i++) {
        fonct(t[i])
        
    }
  }



  function affVal(v){
    console.log(`valeurs du tableau : ${v} \n`)
 }
 
    
// Exportation
module.exports.boucle = forEach
module.exports.affichage = affVal
