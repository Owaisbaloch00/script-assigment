// questino no 1

let num = 3.45214;
 
console.log("Integer Value"," "+num);

console.log("Round Number"," "+Math.round(num));
console.log("Floor Number"," "+Math.floor(num))
console.log("Ceil Number"," "+Math.ceil(num))

// questino no 2

let num1 = -3.65214;
 
console.log("Integer Value"," "+num1);

console.log("Round Number"," "+Math.round(num1));
console.log("Floor Number"," "+Math.floor(num1))
console.log("Ceil Number"," "+Math.ceil(num1))


// questino no 3

let absolute = -4
let absolutenum=Math.abs(absolute)
 
console.log("Absolute Value "+absolute+" is " +absolutenum);


// questino no 4

let dice = Math.floor(Math.random()*6+1)


console.log("Raondom Dice Value ",dice);

// questino no 5


let head="head"

let tail="tail"

console.log(Math.floor(Math.random()+1),head||tail);

// questino no 6

let randomval=Math.floor(Math.random()*100)

console.log("Random Number ",randomval);


// questino no 7

let user=prompt("Choose 1 to 10 Number")

console.log("Your number is", user)

console.log("Secret number is ",Math.floor(Math.random()*10));
