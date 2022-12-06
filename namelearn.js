'use strict'


const FILES = `Screenshot_20221206_100137.png
Screenshot_20221206_100149.png
Screenshot_20221206_100157.png
Screenshot_20221206_100207.png
Screenshot_20221206_100222.png
Screenshot_20221206_100233.png
Screenshot_20221206_100258.png
Screenshot_20221206_100309.png
Screenshot_20221206_100317.png
Screenshot_20221206_095936.png
Screenshot_20221206_100047.png
Screenshot_20221206_100115.png`.split('\n');


const img=document.getElementById('img');
const screen=document.getElementById('screen');
const next=document.getElementById('next');


const randInt=i=>Math.floor(Math.random()*i);
const randChoice=arr=>arr[randInt(arr.length)];

function nextImage(){
    img.src=`imgs/${randChoice(FILES)}`;
}

function main(){
    nextImage();
    screen.addEventListener('click',e=>{
        if(screen.className=='transparent'){
            screen.className='';
        }else{
            screen.className='transparent';
        }
    });
    next.addEventListener('click',e=>{
        nextImage();
    })
}

main();