//1)
const numbersArray = [1,1,2,3,4,5,5,5,6];
function unique(arr) {
    return Array.from(new Set(arr));
  }
  console.log(unique(numbersArray))
  
//или так
const numbersArray2 =[...new Set([1,1,2,3,4,5,5,5,6])]
console.log(numbersArray2)


//2)
const userBob= {
  name: 'Bob',
  age: 22,
}
const userJane= {
  name: 'Bob',
  age: 22,
}
const greatUser = new Map;
greatUser
    .set(userBob, 'Hello Bob nice to see you' )
    .set(userJane, 'How your kids doing Jane?' )

console.log(greatUser.get(userBob))
console.log(greatUser.get(userJane))

//или так
const greatUser2 = new Map([
  [userBob, 'Hello Bob nice to see you'],
  [userJane, 'How your kids doing Jane?']
])
console.log(greatUser2.get(userBob))
console.log(greatUser2.get(userJane))


//3)
let obj = {
  name: "John",
  age: 30
};

let obj2 = {
  name: "Alex",
  age: 40
};

let map = new Map(Object.entries(obj));
console.log(map);

function returnMapofObject(item){
  if(item.size){
    return item = Object.fromEntries(item)
  } else {
    return item = new Map(Object.entries(item))
  }
}
console.log(returnMapofObject(obj2))
console.log(returnMapofObject(map))