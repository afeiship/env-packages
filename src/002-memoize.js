let hasOwnProperty = Object.prototype.hasOwnProperty;
let memoize = (fn, mem = {}) => k => hop.call(mem, k) ? mem[k] : (mem[k] = fn(k));



function memoize2(inCallback, inKeyGen) {
  var cache = {};
  var keyGen = inKeyGen || JSON.stringify;
  return () => {
    var key = keyGen(arguments);
    return hasOwnProperty.call(cache, key) ? cache[key] : (cache[key] = inCallback.apply(null, arguments));
  };
}


// const memoize2 = function (fn) {
//   const cache = {};
//   return function () {
//     const key = JSON.stringify(arguments);
//     var value = cache[key];
//     if (!value) {
//       console.log('新值，执行中...');         // 为了了解过程加入的log，正式场合应该去掉
//       value = [fn.apply(this, arguments)];  // 放在一个数组中，方便应对undefined，null等异常情况
//       cache[key] = value;
//     } else {
//       console.log('来自缓存');               // 为了了解过程加入的log，正式场合应该去掉
//     }
//     return value[0];
//   }
// }

// module.exports = memoize2;
