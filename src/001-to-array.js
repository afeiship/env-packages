// original code:
let toArray = obj => {
  let arr = [];
  for (let i = obj.length; i--;) arr[i] = obj[i];
  return arr;
};

// optmize code:
function toArray2(inArrayLike) {
  var result = [];
  var i = inArrayLike.length;
  for (; i--;) result[i] = inArrayLike[i];
  return result;
}

// USE while version:
function toArray3(inArrayLike) {
  var result = [];
  var i = inArrayLike.length;
  while (i--) result[i] = inArrayLike[i];
  return result;
}
