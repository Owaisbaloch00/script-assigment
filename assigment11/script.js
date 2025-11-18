let str="12345@#$oais"
let password=""


function generate(){
for(let i=0;i<12;i++){
    let rondomnum=Math.round(Math.random()*str.length)

    password=str[rondomnum];

    console.log(password);
    
}
}
