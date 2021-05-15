//this
// console.log(this);

/*
window객체가 콘솔에 출력된다.
전연객체인 window객체가 this의 기본값이다.

this는 주로 함수 내부에서 사용된다. 특히 객체의 메소드(객체안의 함수)를 만들 때 중요한 역할을 한다.


*/

// 이 코드의 메소드를 다른 객체에도 적용하고 싶으니 분리한다.
const user = {
  firstName: 'siwan',
  lastName: 'park',
  getFullName: function () {
    return `${user.firstName} ${user.lastName}`;
  },
};

console.log(user.getFullName());

function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}

const user2 = {
  firstName: 'lee',
  lastName: 'dong yual',
  getFullName: getFullName,
};

console.log(user2.getFullName());

/* 어떤 객체의 메소드를 호출하는 경우 */

// function printThis() {
//   console.log(this);
// }

/*
아래 Arrow Function은 this를 써도 모든 결과가
window객체로 출력된다.
Arrow Function에서 This 값은 일반 함수 처럼 호출한
대상에 따라 상대적으로 변하는게 아니라 Arrow Function이
선언되기 직전에 This를 찾는다. 즉, window 객체이다.
그래서 일반 함수가 this 사용에 더 권장된다.
*/
const printThis = () => {
  console.log(this);
};

const myObj = {
  content: 'myObj',
  printThis: printThis,
};

myObj.printThis();

const otherObj = {
  content: 'otherObj',
  printThis: printThis,
};

otherObj.printThis();
console.log(otherObj);

/*
꼭 이렇게 외부에서 여러객체에 공통적으로 사용되는
메소드를 만드는 것 뿐만 아니라
그냥 객체 내부에서 메소드를 만들 때도 메소드가 속해있는
객체에 프로퍼티가 필요한 상황에서 충분히 활용할 수 있다.
*/

const user3 = {
  firstName: 'Jay',
  lastName: 'park',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(user3.getFullName());
