//중첩조건문 (Nested If)

//윤년 계산해보기


let year = 2023;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if(year % 400== 0) {
            console.log(`${year}년은 윤년입니다.`);
     } else {
            console.log(`${year}년은 평년입니다.`);
        }
    } else {
    console.log(`${year}년은 윤년입니다.`)
}
    } else {
    console.log(`${year}년은 평년입니다.`)
}

year = 2000;

// 위의 식 단순화(아래)

if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    console.log(`${year}년은 윤년입니다.`);

else
    console.log(`${year}년은 평년입니다.`);

