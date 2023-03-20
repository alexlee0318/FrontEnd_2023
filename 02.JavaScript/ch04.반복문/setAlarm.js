// (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 정수
//    /    0:0~ 23:59
//  경우의 수 3가지를 따져본다****

/* 
let m = 0;
    if(m => 45)
    m = m - 45;
    else
     m = m + 20;

let h = 0;
    if {(m <= 45; & h != 0;)
       h= h -1;
    else if (m <= 45; & h )
        h = h -1;

        console.log(`${h}'시' ${m}'분') */

let m = 0;
let h = 0;
if (m >= 45) {
  nh = h;
  nm = m - 45;
} else {
  if (h == 0) {
    nh = 23;
    nm = m + 15;
  } else {
    nh = h - 1;
    nm = m + 15;
  }
}
console.log(`${nh}시 ${nm}분`);


let minuite = 0; let hour = 0;
let nhour, nMin;
if (minuite >= 45) {
  nHour = hour;
  nMin= minuite - 45;
} else {
  nHour = (hour + 24 - 1) % 24;
  nMin = minuite + 60 -45;
}
console.log(`${nh}시 ${nm}분`);