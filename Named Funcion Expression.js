/*Named Fucntion Expression*/
// 함수 표현식으로 함수가 할당된 변수에는 자동으로 name이라는 프로퍼티를 갖는다. 이는 변수이름 자체를 문자열로 갖는다.
const sayHi = function () {
  console.log('Hi');
};
console.log(sayHi.name);

// 함수에 이름을 붙여주면 name 속성은 함수 이름을 문자열로 갖는다.
const sayHi2 = function printHiInConsole() {
  console.log('Hi2');
};

console.log(sayHi2.name);

//이 함수 이름은 함수 내부에서 함수 자체를 가리킬 때 사용할 수 있고 함수를 외부에서 호출해 사용할 순 없다.
const sayHi3 = function printHiInConsole() {
  console.log('Hi3');
};

// printHiInConsole(); // ReferrenceError

//기명 함수 표현식은 일반적으로 재귀함수(Recursive function)를 사용
let countdown = function (n) {
  console.log(n);

  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
};

countdown(5); //1~5까지 출력후 0까지가면 End출력

/*
재귀함수에 기명함수표현식을 사용하지 않으면 TypeError오류가 난다.
*/

let myFunction = countdown;

countdown = null;

// myFunction(5); //TypeError

/*
따라서 재귀함수는 기명함수표현식(Named Function Expression)으로 하는게 안전해서 좋다.
*/
let countdown2 = function printCountdown(n) {
  console.log(n);

  if (n === 0) {
    console.log('End!');
  } else {
    printCountdown(n - 1);
  }
};

let myFunction2 = countdown2;

countdown2 = null;

myFunction2(5);
