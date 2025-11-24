// questino no 1

let currentDate = new Date()

console.log("current date is "+currentDate);

// questino no 2

let currentmonthname= ["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","december"]

let months=new Date().getMonth()

let currentmonth=currentmonthname[months]

alert("current month is "+currentmonth)

// questino no 3

let currentmdayname= ["sun","mon","tues","wed","thurs","fri","sat"]

let days=new Date().getDay()

let currentday=currentmdayname[days]

alert("current day is "+currentday)


// questino no 4

let today=new Date().getDay

if (today===0||today===6){
    console.log("It's Funday")
}
else{
    console.log("It's not Funday");
    
}

// questino no 5

let age = prompt("Enter Your Age")

let birthyear = new Date().getFullYear()

let year = birthyear-age

console.log("My age is " +age);

console.log("your birth year "+year);


// questino no 6 

let currenthour=new Date().getHours()

if(currenthour < 12){
    console.log("It's Am");
    
}
else{
    console.log("It's Pm");
    
}
