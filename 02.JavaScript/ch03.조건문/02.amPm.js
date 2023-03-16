
let today = new Date();
console.log(today);
let hour = today.getHours();
console.log(hour);

if (hour < 12)
console.log(`오전 ${hour}시입니다.`);
else
    console.log(`오후 ${hour -12}시입니다.`);

