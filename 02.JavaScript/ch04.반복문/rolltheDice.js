//주사위 3개의 눈은 입력을 통해서 받지 말고, 랜덤 넘버로 만들 것

let dice = [
  parseInt(Math.ceil(Math.random() * 6)),
  parseInt(Math.ceil(Math.random() * 6)),
  parseInt(Math.ceil(Math.random() * 6)),
];

if (dice[0] == dice[1] && dice[0] == dice[2]) {
  console.log(10000 + dice[0] * 1000);
} else {
  if (dice[0] == dice[1] || dice[0] == dice[2]) {
    console.log(
      1000 * (dice[0] == dice[1] ? dice[0] : dice[2]) +
        dice[0] +
        dice[1] +
        dice[2]
    );
  } else if (dice[1] == dice[2]) {
    console.log(1000 * dice[1] + dice[0] + dice[1] + dice[2]);
  } else {
    let maxVal = dice[0];
    if (maxVal < dice[1]) {
      maxVal = dice[1];
    }
    if (maxVal < dice[2]) {
      maxVal = dice[2];
    }
    console.log(`${maxVal}*100`);
  }
}
