//STEP 1
/*let movies = ["The Terminator", "Alien3", "Twelve Monkey", "Jurassic Park", "Blade Runner 2049"]
window.console.log(movies[1]);
*/
//STEP 2
/*function passMovies(n){
    let movies = [
        "The Terminator",
        "Alien3",
        "Aliens",
        "New york lost",
        "Chucky"
    ];
    return movies[n];
}

window.console.log(passMovies(1));*/

//STEP 3
/*function passMovies(){
    let movies = [
        "The Terminator",
        "Alien3",
        "Aliens",
        "New york lost",
        "Chucky"
    ];
    movies[movies.length] = "Final Fantasy Within the Spirit";
    return movies.length;
}
window.console.log(passMovies());*/

//STEP 4
/*let movies = [
    "Ace Venture", 
    "Alien", 
    "The Terminator 2", 
    "Rocky", 
    "RockyII"
];

movies.shift();
window.console.log(movies);*/

//STEP 5
/*let movies = [
    "Resident Evil",
    "Rambo",
    "Ace Venture", 
    "Alien", 
    "The Terminator 2", 
    "Rocky", 
    "RockyII"
];

let i;
for(i=0;i<movies.length;i++){
    window.console.log(movies[i]);
}*/

//STEP 6
/*let movies = [
    "Resident Evil",
    "Rambo",
    "Ace Venture", 
    "Alien", 
    "The Terminator 2", 
    "Rocky", 
    "RockyII"
];

let favMovies;

for(favMovies in movies){
    window.console.log(movies[favMovies]);
}*/

//STEP 7
/*let movies = ["Resident Evil","Rambo","Ace Venture", "Alien", "The Terminator 2", "Rocky", "RockyII"];
let favMovies;

for(favMovies in movies){
    window.console.log(movies.sort()[favMovies]);
}*/

//STEP 8
/*let favMovies = ["Resident Evil", "Ace Venture", "Alien", "RockyII"];
let leastFavMovies =["Rambo", "The Terminator 2", "Rocky"];

window.console.log("Movies I like: ");
let i;
for(i=0;i<favMovies.length;i++){
    window.console.log(favMovies[i]);
}
window.console.log("Movies I regret watching: ");
let a;
for(a=0;a<leastFavMovies.length;a++){
    window.console.log(leastFavMovies[a]);
}
*/
//STEP 9
/*let favMovies = ["Resident Evil", "Ace Venture", "Alien", "RockyII"];
let leastFavMovies =["Rambo", "The Terminator 2", "Rocky"];
let movies = favMovies.concat(leastFavMovies);

window.console.log(movies.reverse());*/

//STEP 10
/*let favMovies = ["Resident Evil", "Ace Venture", "Alien", "RockyII"];
let leastFavMovies =["Rambo", "The Terminator 2", "Rocky"];
let movies = favMovies.concat(leastFavMovies);

function lastMovie(n){
    return n[n.length -1];
}

window.console.log(movies+"\nThe last movie item is " +lastMovie(movies));*/

//STEP 11
/*let favMovies = ["Resident Evil", "Ace Venture", "Alien", "RockyII"];
let leastFavMovies =["Rambo", "The Terminator 2", "Rocky"];
let movies = favMovies.concat(leastFavMovies);

function lastMovie(movie){
    return movie[0];
}

window.console.log(movies+"\nThe First movie item is " +lastMovie(movies));*/

//STEP 12
/*
let movies = ["Resident Evil","Rambo","Ace Venture", "Alien", "The Terminator 2", "Rocky", "RockyII"];
movies.splice(1,2, "Chucky", "Hannibal");
movies.splice(5,1, "RockyIII");

window.console.log(movies);*/

//STEP 13
// let employee1 =[];
// employee1["EmployeeID"] = 5145;
// employee1["Name"] = "Jeronimo";
// employee1["Title"] = "Front End Developer";
// employee1["Department"] = "Science and Mathematics";
// employee1["Current"] = true;

// let employee2 = [];
// employee2["EmployeeID"] = 1446;
// employee2["Name"] = "Vanessa";
// employee2["Title"] = "Work Social";
// employee2["Department"] = "Immigrations";
// employee2["Current"] = false;

// let employees = [employee1, employee2];
// window.console.log(employees);

//STEP 14
// let employee1 =[];
// employee1["EmployeeID"] = 5145;
// employee1["Name"] = "Jeronimo";
// employee1["Title"] = "Front End Developer";
// employee1["Department"] = "Science and Mathematics";
// employee1["Current"] = true;

// let employee2 = [];
// employee2["EmployeeID"] = 1446;
// employee2["Name"] = "Vanessa";
// employee2["Title"] = "Work Social";
// employee2["Department"] = "Immigrations";
// employee2["Current"] = false;

// let employees = [employee1, employee2];

// for (let i=0; i<employees.length;i+=1){
//     console.log(employees[i]);
// }

//STEP 15
let employee1 =[];
employee1["EmployeeID"] = 5145;
employee1["Name"] = "Jeronimo";
employee1["Title"] = "Front End Developer";
employee1["Department"] = "Science and Mathematics";
employee1["Current"] = true;

let employee2 = [];
employee2["EmployeeID"] = 1446;
employee2["Name"] = "Vanessa";
employee2["Title"] = "Work Social";
employee2["Department"] = "Immigrations";
employee2["Current"] = false;

let employee3 = [];
employee2["EmployeeID"] = 1326;
employee2["Name"] = "Carla";
employee2["Title"] = "Chief";
employee2["Department"] = "The Monkey Island";
employee2["Current"] = false;



//STEP 16
// let movies = [["Resident Evil",5],["Rambo",3],["Ace Venture",4], ["Alien",4], ["The Terminator 2",5]];

// let i;

// for (i = 0; i < movies.length; i +=1) {
//   window.console.log(movies[i][0]);
//  }

//STEP 17

// let employees = [
//     "LUIS MIGUEL",
//     "JERO OCAMPOS",
//     "VANESSA MOLINA",
//     "BRUCE WILLIS"
// ];

// showEmployee(employees);

// function showEmployee(employee){
//     window.console.log("Employees:\n");
//     for(i=0;i<employee.length;i++){
//         window.console.log(employee[i]);
//     }
    
// }

//STEP 18
// function fb(e){
// let x = typeof e;
//    if(x === 'string' || e >0){
//     return e;
//    }
// }

// function filterValues(val){
//     return val.filter(fb);
// }

// window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 19
// let randoms = Array(10).fill(0).map(eachRandom);

// function eachRandom(){
//     return Math.floor(Math.random()*10);
// }

// window.console.log("Numbers by random\n" +randoms);

//STEP 20
// let numb = [15,80,55,11,55,69,0,2,3,7];
// let lg = numb.reduce(function(val1, val2){
//     return Math.max(val1,val2);
// });

// window.console.log(numb+"\nThe largest number: "+lg);
