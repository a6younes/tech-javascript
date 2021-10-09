
//importation

let fonctions = require('./fonctions');

// Constantes
const dim = 10;
const t =  Array.from({length: dim}, (v, k) => Math.ceil(Math.random(k)*dim));
var i = 0;


//coeur
fonctions.bouclef(t, fonctions.funaff(t))
    
