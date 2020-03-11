//STEP 1
/*let movies = ["The Terminator", "Alien3", "Twelve Monkey", "Jurassic Park", "Blade Runner 2049"]
window.console.log(movies[1]);
*/
//STEP 2
/*let movies = [];
function newMovies(){
movies[0] = "Back to the Future";
movies[1] = "Back to the Future2";
movies[2] = "Aliens";
movies[3] = "Star Wars Episode III";
movies[4] = "Nemesis Evangelion";
}


window.console.log(movies[0]);*/

//STEP 3
/*let movies = [];

movies[0] = "Back to the Future";
movies[1] = "Back to the Future2";
movies[2] = "Aliens";
movies[3] = "Star Wars Episode III";
movies[4] = "Nemesis Evangelion";
movies[movies.length] = "Final Fantasy Within the Spirit";

window.console.log(movies.length);*/

//STEP 4
/*let movies = ["Ace Venture", "Alien", "The Terminator 2", "Rocky", "RockyII"];
movies.shift();

movies.forEach(function(movies){
    window.console.log(movies);
});*/

//STEP 5
/*let movies = ["Resident Evil","Rambo","Ace Venture", "Alien", "The Terminator 2", "Rocky", "RockyII"];

let i;
for(i=0;i<movies.length;i++){
    window.console.log(movies[i]);
}
*/
//STEP 6
/*let movies = ["Resident Evil","Rambo","Ace Venture", "Alien", "The Terminator 2", "Rocky", "RockyII"];
let favMovies;

for(favMovies in movies){
    window.console.log(movies[favMovies]);
}
*/
//STEP 7
/*let movies = ["Resident Evil","Rambo","Ace Venture", "Alien", "The Terminator 2", "Rocky", "RockyII"];
let favMovies;

for(favMovies in movies){
    window.console.log(movies.sort()[favMovies]);
}*/

//STEP 8
/*let movies = ["Resident Evil","Rambo","Ace Venture", "Alien", "The Terminator 2", "Rocky", "RockyII"];
let favMovies
let leastFavMovies;
let i;

window.console.log("Movies I like: ");

for(i=0;i<movies.length;i++){
    window.console.log(movies[i]);
}

window.console.log("Movies I regret watching: ");*/

//STEP 9
/*let movies = ["Resident Evil","Rambo","Ace Venture", "Alien", "The Terminator 2", "Rocky", "RockyII"];
let favMovies = movies.concat("Stargate","FFVII");

window.console.log(favMovies.reverse());
*/
//STEP 10
/*let movies = ["Resident Evil","Rambo","Ace Venture", "Alien", "The Terminator 2", "Rocky", "RockyII"];
let favMovies;


window.console.log(favMovies);*/

//STEP 11
/*let movies = ["Resident Evil","Rambo","Ace Venture", "Alien", "The Terminator 2", "Rocky", "RockyII"];
movies.splice(1,2, "Chucky", "Hannibal");
movies.splice(5,1, "RockyIII");

window.console.log(movies);*/
//STEP 12


//STEP 13
/*let employee1 =[];
employee1[0] = "EmployeeID";
employee1[1] = "Name";
employee1[2] = "Title";
employee1[3] = "Department";
employee1[4] = "Current";

let employee2 = [];
employee2[0] = "3243432";
employee2[1] = "Jeronimo";
employee2[2] = "Front End Developer";
employee2[3] = "Science and Mathematics";
employee2[4] = "Yes";

let employees = employee1.concat(employee2);

window.console.log(employees);*/

//STEP 14


//STEP 15

//STEP 16
/*let movies = [["Resident Evil",5],["Rambo",3],["Ace Venture",4], ["Alien",4], ["The Terminator 2",5]];

let filtMovies = movies.filter(function (e){
    for(i=0; i < e.length; i=+1){
        window.console.log(e[i,0]);
    }    
});*/



// let i;
// let employees = [["Jessica",10],["Zak",9],["Fred",15],["Mike",5]];
// for (i = 0; i < employees.length; i +=1) {
//     window.document.write(employees[i][0]);
// }

//STEP 17
/*
let employees = [
    "ZAK ZULCABA",
    "JERO OCAMPOS",
    "VANESSA MOLINA",
    "BRUCE WILLIS"
];

showEmployee(employees);

function showEmployee(employee){
    window.console.log("Employees:\n");
    for(i=0;i<employee.length;i++){
        window.console.log(employee[i]);
    }
    
}*/

//STEP 18
/*function fb(e){
   return e >0;
}

 function filterValues(val){
     return val.filter(fb);
}

window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));*/


//STEP 19
/*let randoms = Array(10).fill(0).map(eachRandom);

function eachRandom(){
    return Math.floor(Math.random()*10);
}

window.console.log(randoms);*/

//STEP 20
let numb = [15,80,55,11,55,69,0,2,3,7];
let lg = numb.reduce(function(val1, val2){
    return Math.max(val1,val2);
});

window.console.log("The largest number: "+lg);
