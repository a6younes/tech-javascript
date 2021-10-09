
//Definition



function forEach(t, fonct) {
    for (let i = 0; i < t.length; i++) {
        fonct(t[i])
    }
  }



  function affVal(v){
    console.log(`valeurs du tableau : ${v}`)
 }
 
    







// Exportation
module.exports.bouclef = forEach
module.exports.funaff = affVal
