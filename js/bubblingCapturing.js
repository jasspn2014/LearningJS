let gp = document.querySelector('.gparent');
let p = document.querySelector('.parent');
let c = document.querySelector('.child');


gp.addEventListener('click',()=>{
    console.log('Grand Parent');
},false); // useCapture Flag here true means its in capture mode and false means its in bubbling mode

p.addEventListener('click',()=>{
    console.log('Parent');
},false);

c.addEventListener('click',(e)=>{
    console.log('Child');
    e.stopPropagation();
},false);

