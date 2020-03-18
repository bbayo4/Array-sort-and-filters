// Import stylesheets
import './style.css';

// Part 2 - JavaScript
var acctData = [
 {
 "acctNum": "AAA - 1234",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 5231",
 "user": "Bob"
 },
 {
 "acctNum": "AAA - 9921",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 8191",
 "user": "Alice"
 }
];

var balance = {
 "AAA - 1234": 4593.22,
 "AAA - 9921": 0,
 "AAA - 5231": 232142.5,
 "AAA - 8191": 4344
};

// 1 - function that returns only an array of account numbers, and accepts the following optional parameters: 1 - user, 2 - sortBy (accepts "acctNum" or "balance"), 3 - sortDirection (accepts "asc" or "desc"; default to asc)

function fn2(user='', sortBy='', sortDirection = 'asc'){
  let computedList = acctData;
  let sortObject = {
    'balance':{
      'asc': (a,b)=> { return balance[a.acctNum] - balance[b.acctNum] ? 1 : 0},
      'desc': (a,b)=> { return balance[b.acctNum] - balance[a.acctNum] ? -1 : 0}
    },
    'acctNum': {
      'asc': ( a, b ) => {return a[sortBy] < b[sortBy] ? 1 : 0},
      'desc': (a,b)=> { return a[sortBy] > b[sortBy] ? -1 : 0}
    }
  }

  // filter
  if (user) {
    computedList = computedList.filter(item => item.user.includes(user));
  }

  //sort
  if (sortBy) {
    if (!user) {
      computedList = computedList.slice();
    }
    computedList.sort(sortObject[sortBy][sortDirection]);
  }else{
    computedList = computedList.map(function(a) {
      return a.acctNum;
    });
  }
  return  computedList;
}

// 2 - console.log
console.log('************************************************************');
console.log('------------------------Outputs-----------------------------');
console.log('************************************************************');

console.log('array of account numbers', fn2())
console.log('filter by Bob', fn2('Bob', 'acctNum'));
console.log('filter by Charlie', fn2('Charlie', 'acctNum'));
console.log('sorted by acctNum', fn2('', 'acctNum', 'desc'));
console.log('filtered by Alice; sorted by balance ascending', fn2('Alice', 'balance'));