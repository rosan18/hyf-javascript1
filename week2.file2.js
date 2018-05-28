let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log("myString");
console.log("myString".length);
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

// add Mauro's favorite animal, turtle //
favoriteAnimals.push('turtle'); 
console.log(favoriteAnimals);

// add Jim's favorite animal before blowfish //
favoriteAnimals.unshift("meerkat");
console.log(favoriteAnimals);
console.log("the array has a length of:5 " + favoriteAnimals.length);

// delete 'giraffe from the list of animals' //
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);

// finding position or index number of an array item //
favoriteAnimals.indexOf("meerkat")
console.log("the index of meerkat is at:0 " + favoriteAnimals.indexOf("meerkat"));

//create a function that takes 3 arguments and returns the sum //
function add(x,y,z){
return x+y+z;
}
console.log(add (1,2,3));

// create a function called colorCar that receives a color and prints out blue car //
function colorCar(blue){
}
console.log("a blue car");

// create an object //
let car = {"type":"Fiat", "model":"500", "color":"white"};
console.log(car);
// create a function named vehicleType //
function vehicleType (color, code) {
  if (code == 1){
    console.log("a "+color+ " car");
  }else{
        console.log("a "+color+ " motorbike");
  }
}


vehicleType("blue", 2);

// // if (3 === 3) {
//     console.log("yes")
// } else {
//     console.log("no")
// }
var a= (3===3 ? 'yes' : 'no');
console.log(a);

// add parameter 'age' to the function vehicleType //
function vehicle (color,code,age) {
 if (code == 1){
console.log("a  "+   color+ " used "+" car");
}else{
 console.log("a " +color+ "used "+" motorbike");
 }
}
// call this function below //
vehicle("blue", 1, 5);


// create a list of vehicles //
let list = ["motorbike, caravan, bike, car"];
// find third element in the list created //
console.log(list[2] );

// Change the function vehicle to use the list of question 7/ So that vehicle("green", 3, 1) prints a green new bike
//  function vehicle(color,code,age,list){
//  let list = ["motorbike, caravan, bike, car"];
//   if (age==1){
//   console.log("a" +color+ " new "+" +list[2]");
// }else{
// console.log("a" +color+ " used " +"list[3]");
//  }
// }

// vehicle ("green", 3, 1);
let myStr="Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes"
let list =  ["motorbike, caravan, bike, car"];
for (let i=0; i<list.length; i++){ 
 myStr += list[i] 
} ;
myStr="Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes" +'trucks';
myStr += list[i] + 
console.log(myStr);

// create an empty object //
var myInfo= {};
console.log(myInfo);
// create an object for teachers //
var myTeachers={'Chris' : 'html',
               'Aris' :   'css',
               'Kostas' : 'javascript'};
myTeachers.language = "English";
console.log(myTeachers);

var x = [1,2,3];
var y = [1,2,3];
var z = y;
console.log (x==y);
console.log (x===y);
console.log (z==y); 
console.log (z==x);

 let o1 = { foo: 'bar' };
     let o2 = { foo: 'bar' };
     let o3 = o2;
 console.log(o3);
 console.log(o1); // does not change

let bar = 42;
typeof typeof bar;
