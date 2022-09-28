
let str = ""

document.addEventListener("input" , ()=>{
let user_input = document.getElementById("binary").value ;
 str = user_input
 console.log(str)

 if(str == ""){
    document.getElementsByClassName("result")[1].innerHTML = "0";
 }
} )


for(let i=0;i<=str.length-1;i++){
    if(str[i]!=0 || str[i] != 1){
        console.log("pleasr type a valid number")
    }
    console.log(str[i])
 }



//  let number_index = str.length-1;
//  for(let i=0;i<=str.length-1;i++){
   
//         sum = sum + (2**i) * str[number_index];
//         number_index--;
 
//  }


let button = document.getElementsByClassName("btn")[0]
button.addEventListener("click" , () => {

// code for calculating the sum or output
    let sum = 0;
    let number_index = str.length-1;
    for(let i=0;i<=str.length-1;i++){
      
           sum = sum + (2**i) * str[number_index];
           number_index--;
    
    }
// code for checking that user input is binary or not!
    let count = 0;
    for(let i=0;i<=str.length-1;i++){
        if(str[i]==0 || str[i] == 1){
            count++
        }
     }


     if(count != str.length){
        document.getElementsByClassName("result")[1].innerHTML = "Please Enter a BINARY Number which contains only 0 or 1. "
     }
    
      else{
        document.getElementsByClassName("result")[1].innerText = sum;
      }
     
     


})


