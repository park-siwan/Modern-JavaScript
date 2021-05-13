/*IIFE(Immediately Invoked Function Expression) 즉시 실행 함수 표현*/

(function () {
  console.log('Hi');
})();

//Hi 가 즉시 출력된다.

(function (x, y) {
  console.log(x + y);
})(3, 5);

// 8 이 즉시 출력된다.

console.log('-----------------');

/*그래도 재귀함수는 함수이름이 필요하다.*/
(function countdown(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    countdown(n - 1);
  }
})(5);

/*즉시 실행 함수는 주로 프로그램 초기화 기능에 사용한다. */
(function init() {
  //프로그램이 실행 될 때 기본적으로 동작할 코드들..
})();

/**혹은 재사용이 필요없는, 일회성 동작을 구성할 때 활용하기도 한다.*/
const firstName = 'siwan';
const lastName = 'park';

const greetingMessage = (function () {
  const fullName = `${firstName} ${lastName} `;

  return `Hi! My name is ${fullName}`;
})();

console.log(greetingMessage);
