// question no 1

function fractional(a,b){
  let result = 1
  for(let i = 1; i <=b; i++){
    result *= a
 
  }
     return result
}
 console.log( "question no 1 "+fractional(+5,2))


 // question no 2

 function leapYear(year)
{
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
   console.log("question no 2 "+leapYear())

 // question no 3

  function customindex(str,char) {
    for (let i = 0; i < str.length; i++){
    if(str[i]===char){
        return i
    }
    }
   return -1
  }
  console.log("question no 3 ", customindex("hello","o"))

   // question no 4

   function vowels( ) {
    let sent = "hello kaise hoo app log mero usero";
    let vow = ["a", "e", "i", "o", "u"];
    let result = "";

    for (let i = 0; i < sent.length; i++) {
        let char = sent[i].toLowerCase();
        if (!vow.includes(char)) {
            result += char;
        }
    }

    console.log(result);
}

vowels();


   // question no 5

   function note(hundred){
    amout=hundred*100
     
    let n100 = Math.floor(amout/ 100)
    amout = amout % 100

    let n50 = Math.floor(amout/ 50)
    amout = amout % 50

    let n20 = Math.floor(amout/ 20)
    amout = amout % 20
     

   console.log(n100)
     console.log(n50)
     console.log(n20)
   }

  note(7)