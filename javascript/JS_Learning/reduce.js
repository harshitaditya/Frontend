const MyArray=[1,2,3,4,5,6,7,8,9,10]
// const NewArray=MyArray .reduce((accumulator,currvalue)=>accumulator+currvalue,0)
// Alternate wy to write 
const NewArray=MyArray.reduce((accumulator,currvalue)=>{
    console.log(`value of accumulator ${accumulator} and value of currvalue ${currvalue}`)
    return accumulator+currvalue;
},0)         // here 0 initail value of accumulator.
console.log(NewArray);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalprice=shoppingCart.reduce((acc,currvalue)=>acc+currvalue.price,0);
console.log(totalprice);