console.log("javascript is good to go!");


//var surround = document.getElementById('surroundDiv1');
let brand = document.querySelector('#brand-add1');
let brand2 = document.querySelector('#brand-add2');
let brand3 = document.querySelector('#brand-add3');



//functions--add console.log

function show() {
  let welcome = document.querySelector('#add1');
  welcome.style.display = '';
}

function hide() {
  let welcome = document.querySelector('#add1');
  welcome.style.display = 'none';
}

function show2() {
  let welcome = document.querySelector('#add2');
  welcome.style.display = '';
}

function hide2() {
  let welcome = document.querySelector('#add2');
  welcome.style.display = 'none';
}

function show3() {
  let welcome = document.querySelector('#add3');
  welcome.style.display = '';
}

function hide3() {
  let welcome = document.querySelector('#add3');
  welcome.style.display = 'none';
}



brand.addEventListener("mouseover", show);
brand.addEventListener("mouseout", hide);

brand2.addEventListener("mouseover", show2);
brand2.addEventListener("mouseout", hide2);

brand3.addEventListener("mouseover", show3);
brand3.addEventListener("mouseout", hide3);






