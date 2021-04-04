(function() {
  "use strict";

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyShoppingController", ToBuyShoppingController)
    .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


    ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
   function ToBuyShoppingController(ShoppingListCheckOffService) {
     var list = this;

     list.items = ShoppingListCheckOffService.getItemsToBuy();

     list.checkOff = function(itemIndex) {
       console.log("Checking off item ", itemIndex);
       ShoppingListCheckOffService.checkOff(itemIndex);
     };
   }

  AlreadyBoughtShoppingController.$inject["ShoppingListCheckOffService"];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
     var list = this;

     list.items = ShoppingListCheckOffService.getItemsBought();
  }

  function ShoppingListCheckOffService(){
    var service = this;

    var itemsToBuy = [
      { name: "Cookies", quantity: 4 },
      { name: "Chips", quantity: 2 },
      { name: "Sugary Drinks", quantity: 3 },
      { name: "Candys", quantity: 4 },
      { name: "Apples", quantity: 5 },
      { name: "Bananas", quantity: 6 },
      { name: "Jellys", quantity: 7 },
      { name: "Salt & Vinegar Crisps", quantity: 8 },
      { name: "Beer", quantity: 9 },
      { name: "Water", quantity: 10 }
    ];

    var itemsBought = [];

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

    service.checkOff = function (itemIndex) {
     itemsBought.push(itemsToBuy[itemIndex]);
     itemsToBuy.splice(itemIndex, 1);
   };
  }
})();
