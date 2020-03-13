
function displayMenu(){
"use strict";
    window.console.log("Welcome to the Jerocam Inventory!\nPlease type one of these lists\n");
    window.console.log("'show' - it displays the list of inventory");
    window.console.log("'add' - it adds a new item on the list of inventory");
    window.console.log("'del' - it deletes a item from the list of inventory");
    window.console.log("'exit' - Exit the program");
    window.console.log("");
}

function getInventory(){
"use strict";
    let rugby=[], soccer=[], tennis=[],basket=[],golf=[];
    rugby.sku=32423;
    rugby.product="RUGBY BALL";
    rugby.quantity=25;
    rugby.cost="$118.65";
  
    soccer.sku=58421;
    soccer.product="SOCCER BALL";
    soccer.quantity=95;
    soccer.cost="$213.95";
  
    tennis.sku=37438;
    tennis.product="TENNIS BALL";
    tennis.quantity=225;
    tennis.cost="$63.05";
   
    basket.sku=97670;
    basket.product="BASKET BALL";
    basket.quantity=75;
    basket.cost="$111.65";
  
    golf.sku=36577;
    golf.product="GOLF BALL";
    golf.quantity=985;
    golf.cost="$49.55";

    let inventory = [rugby, soccer, tennis, golf, basket];
    return inventory;
}

function displayItem(x){
"use strict";
    
    window.console.log(x);
    // let values;
    // for (let i=0; i<x.length;i+=1){
    //     window.console.log(x[i]); 
    // }
    // return values;
}

function addNewItem(ItemA){
    "use strict";
    ItemA=[];
    let item1 = window.prompt("Enter a new SKU Item");
    let item2 = window.prompt("Enter a new PRODUCT Item");
    let item3 = window.prompt("Enter a new QUANTITY Item");
    let item4 = window.prompt("Enter a new COST Item");
    ItemA.push(item1,item2,item3,item4);
    window.console.log("Added - "+ItemA);
}

function delItem(itemD){
    "use strict";
    let num, inventory;
    num = parseInt(window.prompt("Enter a number to delete an item"));
    if(num<1 || num > itemD.length){
        window.alert("Invalid input!")
    }
    else {
        inventory = itemD.splice(num -1, 1);
    }
}

function main(){
"use strict";
let command;

displayMenu();

let inv = getInventory();

while(true){
    command=window.prompt("Enter a command");
        if(command!==null){
            if(command==='show'){
            displayItem(inv);
            }
            else if(command==='add'){
            addNewItem(inv);
            }
            else if(command==='del'){
            delItem();    
            }
            else if(command==='exit'){
                break;
            }
            else {
                alert("Error! Invalid input");
            }
        }
        else{
            break;
        }
        //window.console.log("End");
    }
}

main();
