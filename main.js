let playerHp = document.getElementById('playerHp');
let enemyHp = document.getElementById('emenyHp');
let turn = 0;

function hoimi(){
  if(turn === 1){
    return;
  }

  var cure = Math.floor(Math.random() * 30) + 1;
  
  alert("ホイミを使った！");
  alert(`HPを${cure}回復した！`);
}

function pafupafu(){
  if(turn === 1){
    return;
  }

  var PafuNum = Math.floor(Math.random() * 4) + 1;
  
  alert("ぱふぱふを使った！");

  for (var i = 0; i <= PafuNum; i++) {
    alert("ぱふぱふ！");
  }
  alert("しかしなにもおこらなかった…");
}

function bakuretsu(){
  if(turn === 1){
    return;
  }

  var BakuNum = Math.floor(Math.random() * 8) + 1;
    
  alert("ばくれつけんを使った！");

  for (var i = 0; i <= BakuNum; i++) {
    var damage = Math.floor(Math.random() * 900) + 100;
    alert(`${damage}のダメージ！`);
  }
}

function hpCalc(){

}

// let a = 6;
// let b = 9;

// function A(math){
//   if (math % 2 === 0){
//     alert(`${math}は偶数`);
//   } else {
//     alert(`${math}は奇数`);
//   }
// }

// A(a);
// A(b);