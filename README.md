# Modern JavaScript

## **Named Function Expression**

함수 표현식으로 함수를 만들 때는 선언하는 함수에 이름을 붙여줄 수도 있다. 그래서 이름이 있는 함수 표현식을 기명 함수 표현식이라 부른다. 함수 표현식으로 함수가 할당된 변수에는 자동으로 name 이라는 프로퍼티를 가진다.

```javascript
const sayHi = function () {
  console.log('Hi');
};

console.log(sayHi.name); // sayHi
```