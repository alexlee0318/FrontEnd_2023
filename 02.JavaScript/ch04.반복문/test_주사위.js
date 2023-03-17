/* 주사위 3개의 눈은 입력을 통해서 받지 말고, 랜덤 넘버로 만들 것
   let dice1 = parseInt(Math.ceil(Math.random() * 6));
   let dice2 = parseInt(Math.ceil(Math.random() * 6));
   let dice3 = parseInt(Math.ceil(Math.random() * 6)); */

   //같은 눈이 3개 나오는 경우
   dice1 == dice2 && dice1 == dice3

   //같은 눈이 2개 나오는 경우
   dice1 == dice2 != dice3
   dice1 == dice3 != dice2
   dice2 == dice3 != dice1
    
   //모두 다른 눈
   dice1 != dice2 && dice1 != dice3 && dice2 != dice3

