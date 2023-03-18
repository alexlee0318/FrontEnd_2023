//주사위 3개의 눈은 입력을 통해서 받지 말고, 랜덤 넘버로 만들 것
   


let dice1 = parseInt(Math.ceil(Math.random() * 6));
let dice2 = parseInt(Math.ceil(Math.random() * 6));
let dice3 = parseInt(Math.ceil(Math.random() * 6));

let dice = [dice1, dice2, dice3];
  
if (dice1 == dice2 && dice1 == dice3) {      //3개 모두 같은 경우
   console.log(`10000 + dice1*1000`)
} else {
   if (dice1 == dice2 || dice1 == dice3)
         {console.log(`10000 + dice1*1000`)
   } else {
      if (dice2 == dice3)
            {console.log(`10000 + dice2*1000`)
      }        
   }
}
       else {
         if (let i = 0; i < dice.length; i++) {
         if (maxVal < dice[i])
            maxVal = dice[i];
   }
   console.log(`${maxVal}*100);

      }

   //같은 눈이 3개 나오는 경우
   //dice1 == dice2 && dice1 == dice3

   //같은 눈이 2개 나오는 경우
 //  dice1 == dice2 != dice3
  // dice1 == dice3 != dice2
  // dice2 == dice3 != dice1
    
   //모두 다른 눈
  // dice1 != dice2 && dice1 != dice3 && dice2 != dice3

