/*
문장(statements)
우리가 작성하는 모든 자바스크립트 코드는 문장과 표현식으로 구성되어 있다.
자바스크립트에서 문장은 어떤 동작이 일어나도록 작성된 최소한의 코드 덩어리를 가리킨다.
*/

//문장(statements) 예시
let x;
x = 3;

if (x < 5) {
  console.log('x는 5보다 작다');
} else {
  console.log('x는 5와 같거나 크다');
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

/*
첫 번째 줄도 x라는 변수를 선언하는 동작이 일어나는 하나의 문장(statements)이다.
두 번째 줄도 x에 3이라는 값을 할당하는 동작이 일어나니 하나의 문장(statements)이다.
나머지 조건문과 반복문도 문장(statements)의 예시이다.
*/

// 표현식은 결과적으로 하나의 값이 되는 모든 코드를 가리킨다.
5; // 5
('string'); // string

// 어떤 하나의 값을 그대로 작성하는 것도 표현식이지만,

// 이렇게 연산자를 이용한 연산식도 결국은 하나의 값이 된다.

5 + 7; // 12

'I' + ' Love ' + 'Codeit'; // I Love Codeit

true && null; // null

// 이렇게 연산자를 이용한 연산식도 결국은 하나의 값이 된다.

// 그외 객체의 프로퍼티에 접근하거나, 결과적으로 하나의 값이 되는 코드를 표현식(expressions)이라고한다.

const title = 'JavaScript';
const apple = {
  name: 'apple',
};
const numbers = [1, 2, 3];

typeof apple; //object
title; // JavaScript
apple.name; // apple
numbers[3]; // undefined

/* 표현식 이면서 문장, 문장이면서 표현식도 있다. */

// 할당 연산자는 값을 할당하는 동작도 하지만, 할당한 값을 그대로 가지는 가지는 표현식이다.
title = 'JavaScript';

// 함수 호출은 함수를 실행하는 동작도 하지만, 실행한 함수의 리턴 값을 가지는 표현식이다.
sayHi(); // sayHi 함수의 리턴 값

// console.log 메소드는 콘솔에 아규먼트를 출력하는 동작도 하지만, undefined 값을 가지는 표현식이다.
console.log('hi'); // undefined

/*
할당 연산자 자체가 할당한 값을 그대로 리턴하는 특징이 있기 때문에 
연산 자체로 값이 되는 표현식이기도 하다. 그런데,
할당식은 왼쪽에 있는 피연산자에 오른쪽 피연산자 값을 할당하는 동작을 하기 때문에
문장이 되기도 한다. 그리고,
함수 호출도 함수를 호출한 자리가 결국 하나의 리턴값을 가지기 때문에 표현식이라고 
할 수도 있다. 또 함수 내부에 정의한 코드를 실행하는 동작이기 때문에 문장이 되기도 한다.
*/


/*
자바스크립트에서 표현식은 문장을 세미콜론으로
표현식이 나니 문장은 문장자체의 코드블록(중괄호)로 그 문장의 범위가 구분된다.
*/

(3 + 4) * 2;
console.log('Hi!');

while(ture){
  x++;
}

//값으로 평가되지 않고 문장으로 평가되어 에러가 나는 경우 예시
let x;
x = 3;

console.log(if (x < 5) {
  console.log('x는 5보다 작다');
} else {
  console.log('x는 5보다 크다');
});

const someloop = for (let i = 0; i < 5, i++) {
  console.log(i)
};
/* 
이렇게 함수의 아규먼트로 문장(statements)을 전달하면 오류가난다.
조건문이나 반복문은 값으로 평가되지 않고 오로지 문장으로만 평가되기 때문이다.
*/

/* 
이렇게 코드의 문장과 표현식으로 맥락을 이해하면 
자바크스립트의 문법을 좀 더 깊이 이해하고 능숙하게 다룰수 있다.
*/