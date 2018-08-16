window.onload = function(){
  alert("てきがあらわれた！");
};

let enemyHp = document.getElementById('enemyHp');
let myHp = document.getElementById('myHp');
let turn = 0;

if(!localStorage.getItem('enemyHp')){
  localStorage.setItem('enemyHp',enemyHp.textContent);
}
if(!localStorage.getItem('myHp')){
  localStorage.setItem('myHp',myHp.textContent);
}

enemyHp.textContent = localStorage.getItem('enemyHp');
myHp.textContent = localStorage.getItem('myHp');

function hoimi(){
  if (turn === 1){
    return;
  }
  turn = 1;

  var cure = Math.floor(Math.random() * 30) + 20;
  myHp.textContent = parseInt(myHp.textContent) + cure;
  if(myHp.textContent > 100){
    myHp.textContent = 100;
  }

  localStorage.setItem('myHp',myHp.textContent);
  
  alert("ホイミを使った！");
  alert(`HPを${cure}回復した！`);
  setTimeout('turnChange()',1000);
}

function pafupafu(){
  if (turn === 1){
    return;
  }
  turn = 1;

  var PafuNum = Math.floor(Math.random() * 5) + 1;
  alert("ぱふぱふを使った！");
  for (var i = 0; i <= PafuNum; i++) {
    alert("ぱふぱふ！");
  }
  alert("しかしなにもおこらなかった…");

  setTimeout('turnChange()',1000);
}

function bakuretsu(){
  if (turn === 1){
    return;
  }
  turn = 1;

  var BakuNum = Math.floor(Math.random() * 8) + 1; 
  alert("ばくれつけんを使った！");
  for (var i = 0; i <= BakuNum; i++) {
    var damage = Math.floor(Math.random() * 900) + 100;
    alert(`${damage}のダメージ！`);

    enemyHp.textContent = parseInt(enemyHp.textContent) - damage;
    if(enemyHp.textContent <= 0){
      enemyHp.textContent = 0;
    }

    localStorage.setItem('enemyHp',enemyHp.textContent);
  }

  setTimeout('turnChange()',1000);
}

function turnChange(){
    turn = 0;

    if(enemyHp.textContent == 0){
      alert("おめでとう！てきをたおした！");
      reset();
      return;
    }

    enemyAttack = Math.floor(Math.random() * 30) + 10;
    myHp.textContent = parseInt(myHp.textContent) - enemyAttack;
    if(myHp.textContent <= 0){
      myHp.textContent = 0;
    }

    localStorage.setItem('myHp',myHp.textContent);

    alert("てきのこうげき！");
    alert(`${enemyAttack}のダメージを受けた！`);
    if(myHp.textContent == 0){
      setTimeout(function(){
        alert("ざんねん！やられてしまった…");
        reset();
        return;
      },1000);    
    }

}

function reset(){
  localStorage.clear();

  enemyHp.textContent = 9999;
  myHp.textContent = 100;

  return;
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


  