let images= [
    'img/01.jpg',
    'img/02.gif',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
]

let imgIndex = 0;
let imgElement = document.getElementById('slider')
setInterval(()=> {
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    let imgUrl = images[imgIndex]
    imgElement.setAttribute('src', imgUrl)
    imgElement.style.border = '20px solid gray';
    imgIndex++
}, 2000)