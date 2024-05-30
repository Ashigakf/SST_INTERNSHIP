 const x=require("readline").createInterface({
    input :process.stdin,
    output :process.stdout,
 });  
 var a;
 var b;
    x.question("enter the first number: ", (a)=>{
    x.question ("enter the seconde number :",(b)=>{
    const sum =parseInt(a)+parseInt(b);
    console.log ("sum of the two numbers:",+sum+"");
    x.close();
 });
});


