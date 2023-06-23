"use strict";

const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumbers = numbers.filter((number) => {
    return number%2===0;
});


const oddNumbers = numbers.filter(function(number) {
    return number%2!==0;
})

console.log(evenNumbers);
console.log(oddNumbers);



const peopleList = [
    {name:"Sohail", age:20},
    {name:"Faizan", age:19},
    {name:"Ayaan", age:14},
    {name:"Zaid", age:17},
    {name:"Shoaib", age:22}
]

function isEligible(user) {
    return user.age >= 18;
}

const eligibleVoters = peopleList.filter(isEligible);

console.log(eligibleVoters);

eligibleVoters.forEach(user=>{
    console.log(user.name);
});
