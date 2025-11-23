sumAll(1, 2, 3, 4) 
const sumAll=(...numbers)=>{
    return numbers.reduce((accumulator,current)=>accumulator + current, 0);
};
