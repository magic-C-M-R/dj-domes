var target ={a:1};

var source1 ={b:2,c:2};

var source2 ={c:3};

Object.assign(target,source1,source2);

console.log(target);

//如过出现重复属性 后者覆盖前者。
