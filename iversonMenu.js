const menuBody = document.querySelector(".menu-body");
const menuText = document.querySelector(".menu-text");
const orderText = document.querySelector(".order-text");
const ingredientInput = document.querySelector(".ingredient-input");
const findBtn = document.querySelector(".find-btn");

const iversonMenu = [
  {
    name: "VR6 ROLL",
    price: 35,
    ingredients: ["Wors ", "Caramelized Onions ", "Peppers ", "Cheese "]
  },
  {
    name: "Burger Classic",
    price: 45,
    ingredients: ["Bacon ", "Eggs ", "Burger Patty ", "Onions ", "Cheese "]
  },
  {
    name: "Classic Feast",
    price: 60,
    ingredients: ["Bacon ", "Eggs ", "Double Patty ", "Caramelized Onions ", "Peppers with Chips "]
  },
  {
    name: "Dirty Wood",
    price: 75,
    ingredients: ["Double Patty ", "Double Cheese ", "Bacon ", "Caramelized Onions ", "Russian ", "Egg with Chips Served with Cheese sauce "]
  },
  {
    name: "Loaded Fries",
    price: 45,
    ingredients: ["Chips with Peppers ", "Onions ", "Bacon/Mince/Chilli ", "Cheese sauce "]
  }
];
let myOrder = [];
function iversonOrder(theName, thePrice, theIngredients) {
  myOrder.push({
    name: theName,
    price: thePrice,
    ingredients: theIngredients});
    console.log(myOrder);
};
menuText.addEventListener("click", () => {
  let theIngredients;
  menuBody.innerHTML = "";
  for(let i = 0; i < iversonMenu.length; i++) {
    for(let j= 0; j < iversonMenu[i].ingredients.length; j++) {
      theIngredients += iversonMenu[i].ingredients[j];
    };
    theIngredients = iversonMenu[i].ingredients
    menuBody.innerHTML += `<div class="the-menu">
                            <p class="iverson-food">${iversonMenu[i].name}</p>
                            <p class="iverson-price">R${iversonMenu[i].price}</p>
                            <p class="iverson-ingredients">${theIngredients}</p>
                            <button class="order-btn" onclick="iversonOrder('${iversonMenu[i].name}', '${iversonMenu[i].price}', '${theIngredients}')">order</button>
                          </div>`;
    
  };
});

orderText.addEventListener("click", () => {
  menuBody.innerHTML = "";
  for(let i = 0; i < myOrder.length; i++) {
    menuBody.innerHTML += `<div class="the-menu">
                            <p class="iverson-food">${myOrder[i].name}</p>
                            <p class="iverson-price">R${myOrder[i].price}</p>
                            <p class="iverson-ingredients">${myOrder[i].ingredients}</p>
                          </div>`;
    
  };
});

let yourIngredients;
function findFood() {
  yourIngredients = "";
  menuBody.innerHTML = "";
  for(let i = 0; i < iversonMenu.length; i++) {
    for(let j = 0; j < iversonMenu[i].ingredients.length; j++) {
      yourIngredients += iversonMenu[i].ingredients[j];
      if(iversonMenu[i].ingredients[j].includes(ingredientInput.value)) {
        menuBody.innerHTML += `<div class="the-menu">
                                <p class="iverson-food">${iversonMenu[i].name}</p>
                                <p class="iverson-price">R${iversonMenu[i].price}</p>
                              </div>`;
        
      };
    };
  };
};

findBtn.addEventListener("click", () => {
  findFood();
});