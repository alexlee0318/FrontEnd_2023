//if - else if - else
// ****범위가 좁은 것부터 시작****//

let score = 73;
let grade;

if (score >= 90)
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >=60)
    grade = 'D';
else
    grade = 'F';

console.log(`성적: ${score}, 학점: ${grade}`);

