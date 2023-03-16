//Constant
const constant = 'Hello';
console.log(constant);
// constant += 'World';     //runtime error 발생

const obj = {x: 1, y: 2}  //obj는 주소값을 포인팅함- 값이 변하지 않아서 error 없음
obj.x = 10;
obj.y = 20;
console.log(obj);
