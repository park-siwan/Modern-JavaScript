// Spread 구문(Spread Syntax)
const numbers = [1, 2, 3];

console.log(...numbers);
console.log(1, 2, 3);

// Rest Parameter와 비슷하지만 그건 여러개의 아규먼트를 하나의 파라미터로 묶는 방식이다.
/*
 Spread 구문은 하나로 묶여있는 값을 각각의 개별 같으로 펼치는 구문이다.
 배열에서 유용한 점은 배열을 편리하게 복사할 수 있다는 것이다.
 
 객체 타입의 값들은 변수에 값이 직접 할당 되는것이 아니다.
 주소값이 참조된다.
*/

/* 원래의 비효율적인 재할당 방식은 slice() 메소드와 push()를 써야했다.
const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = webPublishing.slice();

interactiveWeb.push('JavaScript');

console.log(webPublishing);
console.log(interactiveWeb);
*/

//이렇게 Spread 구문으로 직관적이고 간단하게 배열을 다룰 수 있다.

const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = [...webPublishing, 'JavaScript'];

console.log(webPublishing);
console.log(interactiveWeb);

//Spread 구문으로 여러 배열을 합칠 수 있다.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

//물론 concat으로 합칠수도 있지만 Spread가 더 직관적이다.
const arr4 = arr1.concat(arr2);
console.log(arr4);

/*
Spread 구문으로 함수 호출시 Argument로 활용할 수 있다.
여러개의 파라미터가 있는 함수를 호출할 때 배열을 펼쳐서
각각의 Argument로 활용할 수 있다.
*/

const introduce = (name, birth, job) => {
  console.log('안녕하세요 반갑습니다.');
  console.log(`저는 ${name}입니다.`);
  console.log(`${birth}년 생이고,`);
  console.log(`직업은 ${job}입니다.`);
  console.log(`잘 부탁드립니다.`);
};

const myArr = ['박시완', 1995, '프로그래머'];
introduce(...myArr);

/*
spread 구문 자체가 값이라고 오해하면 안된다.
위 상황은 여러개의 값이 각각으로 매칭되는 상황이기 때문에 가능했다.
*/

/*
이렇게 값처럼 쓰면 오류가 난다.
const numbers2 = [1];
const number = ...numbers;
*/

//배열을 펼쳐서 객체에 담으면 어떻게 될까?
const members = ['시완', '동열', '니코이'];
const newObject = { ...members };
console.log(newObject); //{0:"시완", 1:"동열", 2:"니코이"}

/*
2018년 이후 대부분 브러우저에선 객체를 복사하거나 
기존의 객체를 가지고 새로운 객체를 만들 때 
Spread 구문을 활용할 수 있다.
*/

//객체 Spread하기

const siwan = {
  name: 'siwan',
};

const siwanClone = {
  ...siwan,
  age: 27,
};

console.log(siwan); // {name: "siwan"}
console.log(siwanClone); // {name: "siwan", age: 27}

/*
중괄호 안에서 객체를 Spread 하면 해당 객체의 프로퍼티들이 펼쳐지면서 
객체를 복사할 수 있게 된다. 다른 객체가 가진 프로퍼티에 다른 프로퍼티를
추가해서 새로운 객체를 만들 때 활용할 수 있다.
*/

/* 주의사항 : 객체를 Spread할 때는 반드시 객체를 표현하는 중괄호 안에서 활용해야 한다. */
// [...siwan]; //Error
