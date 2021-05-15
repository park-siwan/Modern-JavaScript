/**

JS의 함수는 다른 기본형 타입과 다르게 객체와 비슷하다. 이런걸 일급함수(First Class Function) 이라고 한다. console.dir로 확인해보면 여러 프로퍼티를 가진 객체의 형태를 가지고 있는 걸 볼 수 있다.

JS함수는 어디에서나 호출될 수 있고 다양한 형태로 호출될 수 있다.

*/

//예시

//함수 표현식으로 함수를 선언하고 호출할 수 있다.
const printJS = function () {
  console.log('JavaScript');
};

printJS();

// 객체안의 메소드로 사용될 수 있다. 객체안에 프로퍼티로 함수를 선언하면 메소드가 된다. 외부에서 함수명.프로퍼티명 처럼 프로퍼티에 접근해서 함수를 호출 할 수 있다.
const myObject = {
  brand: 'oioi',
  bornYear: 2014,
  isVeryNice: true,
  sayHi: function (name) {
    console.log(`Hi! ${name}`);
  },
};

myObject.sayHi('시완');

//배열에도 함수를 넣고 호출할 수 있다.
const myArray = [
  'oioi',
  2014,
  true,
  function (name) {
    console.log(`Hi! ${name}`);
  },
];

myArray[3]('CY');

//다른 함수의 파라미터로도 전달할 수 있다. : 돔 이벤트를 다룰 때 파라미터로 전달하는 곳에 함수선언을 하고 있다.
// const myBtn = document.querySelector('#myBtn');
// myBtn.addEventListener('click', function () {
//   console.log('button is clicked');
// });

//함수를 호출할 때 미리 선언된 함수를 전달하면서 조건에 맞는 방식으로 나중에 호출된다.
function makeQuiz(quiz, answer, success, fail) {
  if (prompt(quiz) === answer) {
    console.log(success());
  } else {
    console.log(fail());
  }
}

function getSuccess() {
  return '정답!';
}

function getFail() {
  return '오답!';
}

const question1 = '5 + 3 = ?';

// makeQuiz(question1, '8', getSuccess, getFail);
//위의 getSuccess, getFail 처럼 다른 함수의 파라미터에 전달된 함수를 콜백 함수(Callback Function)이라 부른다. 함수가 하나의 값으로 취급되는 특성은 어떤 함수의 리턴값이 함수가 될수도 있다는 뜻이다.

//고차함수(Higher Order Function)은 함수를 리턴하는 함수이다.

function getPrintHi() {
  return function () {
    console.log('Hi!?');
  };
}

const sayHi = getPrintHi();

sayHi();

//혹은 한번에 실행하려면 괄호두개()()를 써주면 된다.

getPrintHi()();
