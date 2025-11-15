let a = document.writeln("<h1>"+"question no 1"+"</h1>")
// question no 1
let city=prompt("Enter your city")
let karachi="karachi"

if(city===karachi){
    document.writeln("welcome to city of light")
}else{
    document.writeln("welcome to"+" " +city+" "+"city")
}


let b = document.writeln("<h1>"+"question no 2"+"</h1>")
// question no 2

let gender=prompt("enter your gender")

if(gender=="male"){
    document.writeln("Good Morning sir")
}else{
     document.writeln("Good Morning maam")
}
let c = document.writeln("<h1>"+"question no 3"+"</h1>")

// question no 3

let color= prompt("Select Signal Color")

let red="red"

let yellow="yellow"

let green="green"

if(color==red){
    document.writeln("Must Stop")
}else if(color==yellow){
     document.writeln("Ready to move")
}else{
       document.writeln("Move now ")
}

let d = document.writeln("<h1>"+"question no 4"+"</h1>")
// question no 4

let fuel=0.25
let liter=0.10
if(fuel<=liter){
  document.writeln("Continou")
}else{
   document.writeln("Please Refill the fuel in the car")  
}

let e = document.writeln("<h1>"+"question no 5"+"</h1>")
// question no 5

let totalmark=300
let obtainedmark= 220

 document.writeln("<h3>"+"totalmark"+" "+"="+totalmark+"</h3>")
 document.writeln("<h3>"+"obtainedmark"+" "+"="+obtainedmark+"</h3>")

if(totalmark=obtainedmark){
   document.writeln("<h3>"+"Percentage"+" "+"="+totalmark*obtainedmark/1000+"</h3>")
   
  document.writeln("<h3>"+"Grade"+" "+"="+"B"+"</h3>")
}


let f = document.writeln("<h1>"+"question no 6"+"</h1>")
// question no 6


let secret = prompt("choose a one number 1 1 to 10" )
let num = 5


if(secret==num){
    document.writeln("Bingo!Correct Answer")
}else if(secret==4,6){
    document.writeln ("close enough to the correct answer")
}else{
     document.writeln ("Try again")
}


let h = document.writeln("<h1>"+"question no 7"+"</h1>")
// question no 7


  let  user=prompt("select a odd and even number")


if(user %2==0){
    document.writeln("This is a even number")
}else{
document.writeln("This is a odd number")
}

let i = document.writeln("<h1>"+"question no 8"+"</h1>")
// question no 8

let  users=prompt("Enter Your number")


if(users %3==0){
    document.writeln(users/3 + "is divide by 3")
}else{
    document.writeln("wrong")
}


let k = document.writeln("<h1>"+"question no 9"+"</h1>")
// question no 9



let t = 32
if(t=>40){
   document.writeln("weather is hot")
}else if (t==t){
     document.writeln("weather is normal")
}
else{
    document.writeln("weather is cold") 
}