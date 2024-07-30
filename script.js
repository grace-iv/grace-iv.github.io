let list = document.querySelector('.slider .list');
let item = document.querySelectorAll('.slider .list .item');
let dot = document.querySelectorAll('.slider .dots li')
let prev = document.getElementById('prev');
let next = document.getElementById('next' );

let active= 0;
let lengthitems = item.length -1;

next.onclick = function(){
  if(active + 1 > lengthitems){
    active = 0;
  }
  reloadslider();
}
function reloadslider(){
   let checkleft = item[active].offsetLeft;
 list.Style.left = -checkleft + 'px';
}