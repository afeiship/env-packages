let delve = (obj, key) => (key.split('.').map(p => (obj = obj && obj[p])), obj);

/*
知识点：
1. get by path:
2. 逗号表达式， 结果取右侧

*/
function delve2(obj, key) {
  return (
    key.split('.').map(p => (obj = obj && obj[p])),
    obj
  );
}

//https://blog.csdn.net/xuehyunyu/article/details/73555787
/*逗号表达式是由逗号运算符组合而成
* 逗号表达式的值是最后一个表达式的值*/

var a = 2;
var b = 0;
var c;
c = (++a, a *= 2, b = a * 5);

console.log(a)//输出6
console.log(b)//输出30
console.log(c)//输出30


function delve3(obj,key){
  var paths = key.split('.');
  var result = obj;
  paths.forEach(path=>{
    result = result[path];
  });
  return result;
}


function delve4(obj, key) {
  return (
    key.split('.').forEach(p => (obj = obj && obj[p])),
    obj
  );
}


var obj = {
  name: {
    test: {
      a: null
    }
  }
};

// 这里需要考虑：obj = obj && obj[p]) 的场景
delve4(obj, 'name.test.a.b');

