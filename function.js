function BlackDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: function () {
      console.log(this);
      console.log(this.name + ': 멍멍!');
    },
  };
}

const blackDog = new BlackDog();
blackDog.bark();

function WhiteDog() {
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: () => {
      console.log(this);
      console.log(this.name + ': 멍멍!');
    },
  };
}

const whiteDog = new WhiteDog();
whiteDog.bark();

function hi(a) {
  // 인자를 여러개 줘도 그것을 받는 매개변수가 정해져 있지 않으면 초과하는 인자들은 받지 않는다.
  console.log(a);
}

hi(1, 2, 3, 4);
