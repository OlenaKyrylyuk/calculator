const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits');
const opers = document.querySelectorAll('.opers');
const eq=  document.querySelector('.eq');
const clear = document.querySelector('.clear');
const power  = document.querySelector('.power');

digits.forEach(btn=>btn.addEventListener('click',digitPressed));
opers.forEach(btn=>btn.addEventListener('click',operPressed));

function digitPressed(e){
    e.preventDefault();
    display.value +=e.target.innerText;
    
}

function operPressed(e){
    e.preventDefault();
    display.value +=e.target.innerText;
    
}

eq.addEventListener('click',eqPressed);
function eqPressed(e){
    e.preventDefault();
    display.value = eval(display.value);
}

clear.addEventListener('click',clearPressed);
function clearPressed(e){
    e.preventDefault();
    display.value ='';
}

power.addEventListener('click',powerPressed);
function powerPressed(e){
    e.preventDefault();
    display.value = Math.pow(display.value,2);
}

