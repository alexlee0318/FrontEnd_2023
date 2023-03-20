//obj를 선언하면 속성 뿐 아니라 method도 선언할 수 있다(아래처럼). 자신의 속성값은 this를 써준다.
let obj = {
    //속성(attribute)
    name: '사과',
    price: 1000,
    //메소드(method)
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`)   
        // this.name : 다른 name 불러오는것 방지. 위에서 해당 obj에 있는 name을 불러옴
    }
};

obj.print();    //obj에 있는 메소드 써줌
