function forEach(array, callback){
  for(let i = 0 ; i<array.length; i++) {
    callback(array[i], i, array)
  }
}
  
const array = [1, 2, 3]
const fun = function(num) {
  console.log(num)
}

function map(array, callback) {
  const newArray = []
  for (let i = 0; i < array.length; i++){
    newArray.push(callback(array[i]))
  }
  return newArray
}

function filter(ary, callback) {
  const newArr = []
  for (let i = 0; i < ary.length; i++){
    if (callback(ary[i]) === true){
      newArr.push(ary[i])
    }
  }
  return newArr
}

function every(ary, callback) {
  for(let el of ary){
    if(!callback(el)){
      return false
    }
  }
  return true
}

function some(ary, callback) {
  for(let el of ary){
    if(callback(el)){
      return true
    }
  }
  return false
}

function majority(ary, calback) {
  let trueCount =0
  for (let i = 0; i < ary.length; i++){
    if(calback(ary[i])){
      trueCount++
      if(trueCount>ary.length/2){
        return true
      }
    }
  }
  return false
}

function once(calback) {
  let isCalled =false
  let value;
  return function(args){
    if(isCalled)return value
    isCalled = true
    value = calback(args)
    return value
  }
}

function groupBy(ary, calback) {
  const newObj = {}
  for (let el of ary) {
    if (newObj[calback(el)]){
      newObj[calback(el)].push(el)
    } else {
    newObj [calback(el)] = [el]
    }
  }
return newObj
}

function arrayToObject(ary, calback) {
  const newObj = {}
  for(let el of ary){
    newObj[el] = calback(el)
  }
  return newObj
}

module.exports = { 
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject,
};
