//////////////////////////////////////////////////////////////////////////////
////AUTEUR : ASSAOUCI YOUNES
/////////////////////////////////////////////////////////////////////////////

// importation 

let fonctions = require('./fonctions');



// constantes

const Pizzas = [

    { name:"queen", w: ["π·","π","π","π§"] },

    { name: "cheese", w: ["π§", "π"]},

    { name: "oriental", w: ["π","π","π","πΆ"]},

    { name: "royal", w: ["π","π΅"]},

  ],



  price = new Map([ ["π", 1], ["π·", 2], ["πΆ",2], ["π", 5], ["π§", 5], ["π", 2], ["π΅", 10]]);


//Donner l'ensemble des ingrΓ©dients

let ingredients = Pizzas.filter(function(Pizzas) {
    
   console.log(Pizzas.w)
    
}) 


//Donner pour chaque ingrΓ©dient le nombre de pizzas 



