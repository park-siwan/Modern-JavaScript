/*
함수 내부에서 Arguments 객체를 활용하면
불규칙하게 Arguements 를 사용해야 하는 상황에 유연하게 다룰 수 있었다.

단점 : 
1. Arguments 객체는 유사배열 이기 때문에 배열 메소드를 사용할 수 없다.
2. Arguments 객채는 전체를 다루기 때문에 마지막에 전달되는 것들을 세분화 해야한다.

이러한 Arguments 객체의 아쉬움을 해결하기 위해 Rest Parameter 문법이 나왔다.

*/
// Rest Parameter(...args) 활용코드
function printArguments(...args) {
  for (const arg of args) {
    console.log(arg);
  }
  console.log('------------');
}
printArguments('Park', 'Si', 'Wan');

/* 
배열의 메소드가 잘 작동하는 (...arg)
반면 arguments.slice 는 not a function 이라는 오류가 뜬다.
*/
function printArguments(...args) {
  console.log(args.splice(0, 2));
  //console.log(arguments.splice(0, 2)); //not a function
}

printArguments('Park', 'Si', 'Wan');

/*
명확하게 구분되면 Rest Parameter를 사용하지 않아도 되지만, 
필요에 따라 부분적으로 유연하게 대응할 땐 사용하면 좋다.
*/
function printRank(first, second, ...others) {
  console.log('이벤트 당첨 결과');
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for (const arg of others) {
    console.log(`참가자: ${arg}`);
  }
}

printRank('시완', '승현', '동열', '도영');

/** Rest Parameter의 장점이 상대적으로 더 크다.
 * 불가피한 상황에서 Arguments 객체를 사용하는게
 * 스타일 가이드에서 권장하는 방법이다.
 * 상황에 따라서는 Rest Parameter가 경우를
 * 완벽하게 대처하지 못하니 두가지를 이해하는걸 권장한다.
 */

// 퀴즈풀이: 1세대 거르기
function ignoreFirst(first, ...rest) {
  for (const el of rest) {
    console.log(el);
  }
}

ignoreFirst('아이폰1', '아이폰2', '아이폰3');
ignoreFirst('갤럭시1', '갤럭시2', '갤럭시3');

//다른 풀이 방법
function ignoreFirst2(...args) {
  let i = args.length;
  console.log(args.splice(1, i));
}
ignoreFirst2('아이폰1', '아이폰2', '아이폰3');
ignoreFirst2('갤럭시1', '갤럭시2', '갤럭시3');
