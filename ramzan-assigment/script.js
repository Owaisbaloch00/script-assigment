let firstramzan=new Date("17/Feb/2026")

let currentdate=new Date()

console.log(firstramzan);
console.log(currentdate);

let diff = firstramzan-currentdate

let totaldays=Math.floor(diff/(1000*60*60*24))


let totalweek = Math.floor(totaldays/7)
let remanday=totaldays%7

let totalmonth =Math.floor(totaldays/30)

console.log( "toatl Days "+totaldays);
console.log("toatal-weeks "+totalweek+" Days "+remanday);
console.log("Total-month "+totalmonth);



