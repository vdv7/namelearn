'use strict'


const FILES = {
    'CS195-001':`Screenshot_20221206_100137.png
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
Screenshot_20221206_100115.png`.split('\n'),
    'CS195-002':[]
};

const ALL_FILES=[].concat(...Object.values(FILES));


const img=document.getElementById('img');
const screen=document.getElementById('screen');
const next=document.getElementById('next');


const randInt=i=>Math.floor(Math.random()*i);
const randChoice=arr=>arr[randInt(arr.length)];


var currentGroup='CS195-001';

function nextImage(){
    if(currentGroup){
        img.src=`imgs/${currentGroup}/${randChoice(FILES[currentGroup])}`;
    }else{

    }

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
    img.addEventListener('click',e=>{
        nextImage();
    })
}

main();