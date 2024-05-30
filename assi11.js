const r1=require("readline").createInterface({
    input :process.stdin,
    output :process.stdout,
 });  
    var a;
    var b;

    r1.question("enter the first number\n",(a)=>{
    r1.question("enter the second number\n",(b)=>{


    const area=a*b/2;
    console.log("area of the triagle is"+area);
    r1.close();
    });
});




    