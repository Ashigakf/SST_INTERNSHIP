 
const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});
    readline.question("enter the first number:\n",(a)=>{
    readline.question("enter the second number:\n",(b)=>{
        const num1=parseInt(a);
        const num2=parseInt(b);
        console.log("initial number:" +num1+"and"+num2);
        console.log("comarison operators")

        console.log("num1==num2:",num1==num2);
        console.log("num1!=num2:",num1!=num2);
        console.log("num1===num2",num1===num2);
        console.log("num1!==num2",num1!==num2);
        console.log("num1>num2",num1>num2);
        console.log("num1<num2",num1<num2);
        console.log("num1>=num2",num1>=num2);
        console.log("num1<=num2",num1<=num2);

        readline.close();
    });
});
    