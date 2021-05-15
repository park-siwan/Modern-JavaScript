/* 화살표 함수가 아닌 일반적인 함수

const getTwice = function (number) {
  return number * 2;
};

console.log(getTwice(5));

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function () {
  console.log('button is clicked!');
});

*/

// Arrow Function
const getTwice = (number) => {
  return number * 2;
};

console.log(getTwice(5));

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', () => {
  console.log('button is clicked!');
});

/* function이 "=>" 로 대체 할 수 있다. */

//함수 내부의 동작코드가 return문 하나밖에 없으면 return과 중괄호를 생략할 수 있다. 소괄호도 생략 가능하다. 하지만 넣어야 명시적이다.
const getTwice2 = (number) => number * 2;

console.log(getTwice2(5));

/*
함수의 코드중 return문 위에 할당을 해줄게 있다면 생략이 불가능하다.
*/
const sum = (a, b) => {
  const result = a + b;
  return result;
};

console.log(sum(10, 5));

/*
예외적으로 리턴값이 객체면 중괄호에 소괄호를 씌워줘야 오류가 나지 않는다.
*/
const getName = () => ({ name: 'siwan' });
console.log(getName());

/*
Arrow Function의 주의사항으로
Arguments 객체가 없다는 게 있다.
*/
function normalFunc() {
  console.log(arguments);
}

normalFunc(1, 2, 3);

const arrowFunc = () => {
  console.log(arguments);
};

arrowFunc(1, 2, 3); //Uncaught ReferenceError

//따라서 arguments 객체를 활용하는 함수는 화살표 함수로 변환하기 어렵다.

/*
모든 화살표 함수는 익명 함수라서, 변수에 할당하거나
다른 함수를 호출할 때 아규먼트로 사용된다는 점을 잘
기억해야 한다.
*/
