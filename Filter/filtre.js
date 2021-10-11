//////////////////////////////////////////////////////////////////////////////
////AUTEUR : ASSAOUCI YOUNES
/////////////////////////////////////////////////////////////////////////////

// importation 

let fonctions = require('./fonctions');



// constantes

const Pizzas = [

    { name:"queen", w: ["🐷","🍄","🍅","🧀"] },

    { name: "cheese", w: ["🧀", "🍅"]},

    { name: "oriental", w: ["🍅","🐑","🍄","🌶"]},

    { name: "royal", w: ["🍅","🌵"]},

  ],



  price = new Map([ ["🍅", 1], ["🐷", 2], ["🌶",2], ["🍄", 5], ["🧀", 5], ["🐑", 2], ["🌵", 10]]);


//Donner l'ensemble des ingrédients

let ingredients = Pizzas.filter(function(Pizzas) {
    
   console.log(Pizzas.w)
    
}) 


//Donner pour chaque ingrédient le nombre de pizzas 



