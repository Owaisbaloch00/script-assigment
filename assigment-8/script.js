// question no1

let emptyarr=[[],[],[],[],[],[]]


console.log(emptyarr)


// question no2

let multiarr=[[0,1,2,3],[4,3,2,1],[1,2,3,4],[5,6,7,8],[3,4,5,6]]


console.log(multiarr)


// question no3

for (let i = 0; i < 11; i++) {
   console.log(i);
   
    
}


// question no4


let table=prompt("Enter your Table no")

for (let i = 0; i < 11; i++) {
   console.log(table,"x",i,"=",table*i);
   
    
}


// question no5

let fruit=["Apple","Banana","Orange","Mango","Strawberry"]



for (let i = 0; i < 5; i++) {
   console.log("Element at Index"," "+i+ " ","is"+" "+fruit[i]);
   
    
}


// question no6

// part a 

for (let i = 0; i < 11; i++) {
   console.log(i);
   
    
}


// part b 

for (let i = 11; i > 0; i--) {
   console.log(i);

    
}


// question no 7 


let item=["Cake" , "Apple Pie" , "Cookie", "Chips", "Pattis","cake" , "apple pie" , "cookie", "chips", "pattis"]

let found=prompt("Enter your Food Item")

if(item.includes(found)){
    console.log(found," ","is avaliable");
    
}else{
    console.log(found," ","is not avaliable");
}


// question no 8

for (let i = 5; i < 105; i+=5) {
   console.log(i);

    
}


// question no 9


let smallest=["24","53","78","91","12"]


console.log("This is Smallest no",smallest.splice(4));

// question no 10


let largest=["24","53","78","91","12"]


console.log("This is largest no",largest.slice(3,4));
