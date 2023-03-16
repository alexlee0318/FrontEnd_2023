// 생일 - 오늘 현재 만나이 계산
const bYear = 2000, bMonth = 3, bDay = 20;
const today = new Date();

const tYear = today.getFullYear();
const tMonth = today.getMonth() + 1;
const tDay = today.getDate();

console.log(tYear, tMonth, tDay);

//만나이 계산
let age;
if (tMonth > bMonth)
    age = tYear -bYear;
else if (tMonth < bMonth)
    age = tYear - bYear -1;
else {
    if (tDay >=bDay)
        age = tYear -bYear;
    else
        age = tYear - bYear -1;
}
console.log(age);



/*  지혜 계산(미완)
const age = {tYear - bYear};
let y1;
y1 = {(bMonth < tMonth) || {(bMonth = tMonth) && (bDay <= tDay)}} ? -1 : 0;
const mOld = {(age) + (y1)}
console.log(age +y1)
 */