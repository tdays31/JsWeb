const body = document.querySelector('body');

const IMG_NUMBER = 6;


function paintImage(imgNumber){
    const imge = new Image();
    imge.src=`img/${imgNumber + 1}.jpg`;
    imge.classList.add("bgImge")
    body.appendChild(imge);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();