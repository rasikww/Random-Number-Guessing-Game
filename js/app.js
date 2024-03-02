// console.log("good morning");
// let date=new Date();
// console.log(date);
// let num1=Math.round(7.11);
// console.log(num1);
// let num2=Math.round(7.56);
// console.log(num2);
// let num=Math.random();
// console.log(num);

// let customer={
//     name:"Saman",
//     age:22,
//     address:"Panadura"
// }

// console.log(customer);

// let jsonObj=JSON.stringify(customer);//convert to JSON
// console.log(jsonObj);

// let jsObj=JSON.parse(jsonObj);//convert to JS Object
// console.log(jsObj.name);

// let fun = function(){
//     console.log("Hello !!!");
// }
// fun();
// console.log(fun());

// let fun = ()=>{
//         console.log("Hello !!!");
//     }
// fun();

// let fun = ()=>console.log("Hello !!!");
// fun();

// let fun = (val)=>console.log("Hello !!!"+val);
// fun(100);

let randNum=Math.round(Math.random()*10);
let count=0;
console.log(randNum);
function guess(){
    if(count==10){
        document.getElementById("status").innerHTML="You have won. Reload to play again.";
    }
    if(count<3 && count!=10){
        let number=document.getElementById("guessedNumber").value;
        number=parseInt(number);
        count++;
        if(randNum==number){
            document.getElementById("status").innerHTML="You have won";
            count==10;
        }else if(randNum<number){
            document.getElementById("status").innerHTML="You lost. try again with a lower value";
        }else if(randNum>number){
            document.getElementById("status").innerHTML="You lost. try again with a higher value";
        }
    }else{
        document.getElementById("status").innerHTML="You Lost.Reload";
    }
    
}
