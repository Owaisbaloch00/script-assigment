// question no 1

function date(){
    let currentdate=new Date()
    console.log(currentdate);
    
}
date()


// question no 2

function name(){
    let firstname = "Muhammad"
    let lastname = "Owais"
    let fullname = firstname+" "+lastname

    console.log(fullname);
    
}
name()


// quest no 3 

function sum(n1,n2) {
   
    console.log(n1+n2);

    return
    
}
sum(5,7)


// quest no 4


function claculater(num1,num2,operater){
   if(operater==="+")return num1+num2
   if(operater==="-")return num1-num2
    if(operater==="*")return num1*num2
     if(operater==="/")return num1/num2
}
console.log(claculater(7,5,"*"))


// quest no 5

function square(n){
  return n*n
}
console.log(square(12))


// quest no 6

function fractional(n){
  let result = 1
  for (let i = 1 ; i <=n ; i++){
   result *= i
  }
  return result;
 
  
}
 console.log(fractional(5));

 // quest 7

 function count(){
    for (let i = 5; i < 16; i++) {
        console.log(i);
        
        
    }
 }
 count()


