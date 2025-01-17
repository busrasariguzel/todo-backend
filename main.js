/********************
 * OPTIONAL HELPERS *
 ********************/

/*

These functions will greatly simplify things if you want to write them. They are
implementations of map and filter, plus a very simple sort. If you can do them first, they will make the following functions a lot easier, but they aren't super easy
concepts, so if you want to skip them, you can.

They'll also become easier later once you've written a few of the iteration functions and seen how they can be generalized. Those iteration functions in the last section are good practice for writing these!

*/

const map = (arr , func) => arr.map((func))
const filter = (arr, func) => arr.filter(func)
//   const newArr = [];
//   arr.forEach(function(arr){
//     if (func(arr) === true){
//     newArr.push(arr)
//     }

//     })
    
//     return newArr;
// }

// const map = function(arr , func) {
//   const newArr = [];
//   arr.forEach(function(arr){
//     newArr.push(func(arr))
//     });
//   return newArr;
// }

// const filter = function(arr, func) {
//   const newArr = [];
//   arr.forEach(function(arr){
//     if (func(arr) === true){
//     newArr.push(arr)
//     }

//     })
    
//     return newArr;
// }

const twoPileSort = function(arr, func) {
  const newArr = [];
  console.log(arr)
  arr.forEach(function(arr){
    if (func(arr) === true){
    newArr.unshift(arr)
    } else {
    newArr.push(arr)
    }

    })
    
    return newArr;

  }

  // const pile1 = filter(arr,test);
  // const pile2=filter(arr, function(arr){
  //   return !test(element)
  // })
  // return ;pile1.concat(pile2)}

/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todos) {
  return todos.text
}

const getCompleteness = function (todos) {
  return todos.complete
}

const getPriority = function (todos) {
  return todos.priority
}

const isComplete = function(todos) {
  return getCompleteness(todos)
}

const isHighPriority = function(todos) {
  return getPriority(todos) === 2
}



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = (todos) => todos.map((todo) => todo.text)

const namesAndPriorities = (todos) => todos.map((todo) => todo.priority=== 2 ? todo.text + ' - High' : todo.text + ' - Low')


// const isNotComplete = function(todos) {
//   return getCompleteness(todos) === false
// }

const justNotComplete = (todos) => todos.filter((todo) =>todo.complete === false)


const justComplete = (todos) => todos.filter((todo) => todo.complete === true)


const priority2Only = (todos) => todos.filter((todo) => todo.priority === 2)


// const isLowPriority = function(todos) {
//   return getPriority(todos) === 1
// }
const priority1Only = (todos) => todos.filter((todos, (todo) => todo.priority === 1))




// const notCompleteFirst = function(todos) {
//   return twoPileSort(todos,isNotComplete)
// }
const notCompleteFirst = (todos) => twoPileSort(todos,(todo) => todo.complete === false)


const priority2First = (todos) => twoPileSort(todos,(todo) => todo.priority===2)



module.exports = {
  map,
  filter,
  twoPileSort,
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}