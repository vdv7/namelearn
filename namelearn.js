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
    'CS195-002':`Screenshot_20221206_053302.png
Screenshot_20221206_053340.png
Screenshot_20221206_053402.png
Screenshot_20221206_053433.png
Screenshot_20221206_053447.png
Screenshot_20221206_053536.png`.split('\n')
};

const ALL_FILES=Object.entries(FILES).flatMap(([folder,images])=>Object.values(images).map(image=>folder+'/'+image));


const img=document.getElementById('img');
const screen=document.getElementById('screen');
const next=document.getElementById('next');
const folders=document.getElementById('folders');


const randInt=i=>Math.floor(Math.random()*i);
const randChoice=arr=>arr[randInt(arr.length)];


var currentGroup='CS195-001';

function nextImage(){
    if(currentGroup in FILES){
        img.src=`imgs/${currentGroup}/${randChoice(FILES[currentGroup])}`;
    }else{
        img.src=`imgs/${randChoice(ALL_FILES)}`;
    }
}

function addFolder(folder){
    var folderLink=folders.appendChild(document.createElement('a'));
    folderLink.href='#';
    folderLink.innerText=folder;
    folderLink.addEventListener('click',e=>{
        currentGroup=folder;
        nextImage();
    });
}

function main(){
    nextImage();
    for(var folder in FILES){
        addFolder(folder);
    }
    addFolder('All Images');
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