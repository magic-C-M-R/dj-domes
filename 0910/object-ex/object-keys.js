// object

//迭代

// const obj ={a:1 ,b:2, c:3,}
//
// Object.keys(obj).map(t => console.log(obj[t]));

// const obj1 ={d:1, e:2, f:4}

let {keys,values,entries} = Object;

let obj ={a: 1,b: 2,c: 3}
for (let key of keys(obj)){
  console.log(key);
}

for (let value of values(obj)){
  console.log(value);
}

for (let [key, value] of entries(obj)){
  console.log([key, value]);
}
