const r1=require("readline").createInterface({ 
    input:process.stdin,
    output:process.stdout,
});

r1.question("who are you?:",(name)=>{
r1.question("your house name?:",(name)=> { 
console.log("Hey there"+name+"!");

r1.close();
});
});
