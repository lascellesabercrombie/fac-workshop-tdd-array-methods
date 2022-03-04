function map(array, fn) {
  let newArray = [];
  for (let i = 0; i<array.length; i++){
    newArray.push(fn(array[i]));
  }
  return newArray;
}

function filter(array, fn) {
  let filteredArray = [];
  for (let i = 0; i<array.length; i++){
    if (fn(array[i])){
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}

function every(array, fn) {
  for (let i = 0; i < array.length; i++){
    if (!fn(array[i])){
      return false;
    }
  }; 
  return true;
}

function some(array, fn) {
  for (let i = 0; i<array.length; i++){
    if (fn(array[i])){
      return true
    }
  }
  return false;
}

function find(array, fn) {
  for (let i = 0; i< array.length; i++) {
    if (fn(array[i])){
      return array[i];
    }
  }
  return undefined;
}

function reduce(array, fn, initialValue) {
  let i = 0;
  if (initialValue == undefined){
    initialValue = array[0];
    i = 1;
  }
  let finalResult = initialValue;
  for (i; i < array.length; i++){
  finalResult = fn(finalResult, array[i])
  }
  
  return finalResult;
}

function flat(array, depth=1) {
  let flattened = [];
  if (depth === 0) {
    return flattened;
  }
  for (let i = 0; i<array.length; i++){
      flattened.push(array[i]);
    }
}

function flat(array, depth=1) {
  let flattened = [];
  for (let i = 0; i<array.length; i++) {
    if (Array.isArray(array[i]) && depth > 0) {
      flattened = flattened.concat(flat(array[i], depth -1));
    }
    else{
    flattened.push(array[i]);
    }
  }
  return flattened;
}


// function flat(array, depth=1) {
//   let flattened = [];
//   let holdingArray = [];
//   let i = depth;
//   while (depth > 0){
//     depth --;
//     for (let i = 0; i<array.length; i++){
//       if (array[i].length == undefined) {
//         console.log('there');
//         flattened.push(array[i]);
//       }
//       else{
//         console.log('here');
//         holdingArray.push(array[i]);
//       }  
//   }
//   array = holdingArray;
// }
// return flattened;
// }



// function flat(array, depth=1) {
//   let flattened = [];
//   let holdingArray = [];
//   while (depth > -1){
//   for (let i = 0; i<array.length; i++){
//     if (array[i].length == undefined) {
//       console.log('there');
//       flattened.push(array[i]);
//     }
//     else{
//       console.log('here');
//       holdingArray.push(array[i]);

//   //     console.log(array[i].length);
//   //     console.log(array[i]);
//   //   for (let j = 0; j<array[i].length; j++){
//   //     console.log('here');
//   //     console.log(array[i][j]);
//   //   flattened.push(array[i][j]);
//   // }}
// // }
// // else{
//   }

//   depth = depth-1;  
// } 
// console.log(array);
// array = holdingArray;
// console.log(array);
// // depth -= 1;
// // }}
// // depth -= 1;
//   }
//   console.log(flattened);
//   return flattened;
// }