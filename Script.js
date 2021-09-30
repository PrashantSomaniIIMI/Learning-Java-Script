factor = Number(prompt("How many plates of bhelpuri you want"))
const bhelpuri_ingredient = function(factor) {
       const ingredients = function(amount, unit, name){
              let ingredientAmount = amount * factor
              if (ingredientAmount>1){
                     unit = ("unit"+"s")
                            }
              alert(`${ingredientAmount},${unit},${name}`);
       };
       ingredients(1,"piece","Tomato")
       ingredients(1,"piece","Onion")
       ingredients(2,"slice","lemon")
       ingredients(1,"packet","Bhelpuri Masala")
       ingredients(100,"gms","Moori")
       };
alert (bhelpuri_ingredient(factor))
