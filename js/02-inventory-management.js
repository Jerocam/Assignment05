//FUNCTION DISPLAY THE LIST OF COMMANDS
function displayMenu(){
"use strict";
    window.console.log("Welcome to the Jerocam Inventory!\nPlease type one of these lists\n");
    window.console.log("'show' - it displays the list of inventory");
    window.console.log("'add' - it adds a new item on the list of inventory");
    window.console.log("'del' - it deletes a item from the list of inventory");
    window.console.log("'exit' - Exit the program");
    window.console.log("");
}

//FUNCTION ASSOCIATIVE ARRAYS AND RETURN VALUES OF EACH ARRAYS
function getInventory(){
"use strict";
    
    let rugby= [], soccer=[],tennis=[],basket=[],golf=[];
    
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

    let inventory = [rugby, soccer, tennis, basket, golf];
    return inventory;
    
}

//FUNCTION DISPLAY ITEMS FROM ARRAYS
function displayItem(x){
"use strict";
    window.console.log('SKU\t '+ ' PRODUCT\t'+ ' QUANTITY\t'+ 'COST');
    for (let i=0; i<x.length;i++){
        console.log(
        x[i].sku+'\t'+
        x[i].product+'\t' +
        x[i].quantity+'\t'+
        x[i].cost);
    }
}

//FUNCTION UPDATE NEW ARRAY ITEM
function updNewItem(ItemA){
    "use strict";
    let inv = getInventory();
    let item1 = window.prompt("Enter the SKU number");
    for(let x in ItemA){
        if(item1==ItemA[x].sku){
            let item2 = window.prompt("Enter a quantity of the item");
            ItemA[x].quantity = item2;
            window.console.log("UPDATED! - "+ItemA[x].sku+":"+ItemA[x].quantity);
        }
        // else 
        // {
        //     alert("Unmatched number. Try it again");    //It is not good and I cannot figure out of that!
        // }
    }        
}

//FUNCTION TO PROCESS ALL FUNCTIONS FROM ABOVE
function main(){
"use strict";
let command;
let inv = getInventory();
displayMenu();

    //WHILE IF IS TRUE OR FALSE FOR EACH COMMAND
    while(true){
        command=window.prompt("Enter a command");
            if(command!==null){
                if(command==='show'){
                displayItem(inv);
                }
                else if(command==='update'){
                updNewItem(inv);
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
        }
}

main();//CALL THE FUNCTION MAIN FOR RUNNING, PROCESSING AND DISPLAYING
