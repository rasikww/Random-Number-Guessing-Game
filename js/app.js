let randNum=Math.round(Math.random()*10);
let count=0;
console.log(randNum);
function guess(){
    let number;
    number=document.getElementById("guessedNumber").value;
    number=parseInt(number);
    if(count<3){
        
        count++;
        if(randNum==number){
            document.getElementById("status").innerHTML="You have won";
            count==10;
        }else if(randNum<number){
            document.getElementById("status").innerHTML="You lost. try again with a lower value";
        }else if(randNum>number){
            document.getElementById("status").innerHTML="You lost. try again with a higher value";
        }
    }else if(randNum==number && count>=3){ 
        document.getElementById("status").innerHTML="You have won.Reload to try again";
    }else if(randNum!=number){
        document.getElementById("status").innerHTML="You have Lost.Reload to try again";
    }
    
}
