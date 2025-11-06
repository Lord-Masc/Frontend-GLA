// function yash(){
//     return 4+5;
// }
// const sum = yash();
// console.log(sum);



const age1 = (age)=>{
     if (age>=18) {
        return  "You are eligible for voting";
     }else{
         return "Not eligible for voting";
     }
}
console.log(age1(21));

function greet(name =" guest" ){
    console.log("Hii "+name);
    
}
greet("yash");
greet();

// Rest function

function sum(num1,num2,...Rest) {
    let total = num1+num2;
    for (let index = 0; index < Rest.length; index++) {
        total+=Rest[index];
        
    }
    console.log(total);
    
}

sum(2,3,4,5,6,7,7,8,9);
// console.log(sum(2,3,4,5,6,7,7,8,9));


