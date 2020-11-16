const carTypeBtns = document.querySelectorAll('.btn');

carTypeBtns.forEach((btns) => {
    btns.addEventListener("click", (event) => {
        event.preventDefault();

        const carType = event.srcElement.id;
        const allCars = document.querySelectorAll('.single-item');

        allCars.forEach((singleCar) => {
            if(carType == 'all') {
                singleCar.style.display = 'block';
            } else {
                if(singleCar.classList.contains(carType)){
                    singleCar.style.display = "block"
                } else {
                    singleCar.style.display = "none"
                }
            }
        })
    })
})

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup', (event) => {
    event.preventDefault();

    if (event.keyCode === 13) {
        const inputVal = searchInput.value.toLowerCase();

        const allCars = document.querySelectorAll('.single-item');

        allCars.forEach((singleCar) => {
            if(inputVal == '') {
                singleCar.style.display = 'block';
            } else {
                if(singleCar.classList.contains(inputVal)){
                    singleCar.style.display = "block"
                } else {
                    singleCar.style.display = "none"
                }
            }
        })
    }
})


// image gallery 
const singleItem = document.querySelectorAll('.single-item');
const popupWrapper = document.querySelector('.popup-wrapper');
const pageMask = document.querySelector('.page-mask');
const popup = document.querySelector('.popup');
const popupElements = document.querySelector('.popup-elements');

pageMask.addEventListener('click', (event) => {
    event.preventDefault();

    pageMask.style.display = 'none';
    popupWrapper.style.display = 'none';

    document.getElementsByTagName("body")[0].style = 'overflow: scroll';
})

const imageElement = document.querySelector('.big-img');

const images = document.querySelectorAll('.car-img');

let imageList = [];
let imageCounter = 0;
images.forEach((image) => {
    imageList.push(image.src);
})

singleItem.forEach((items) => {
    items.addEventListener('click', (event) => {
        event.preventDefault();

        console.log(event.target.src);
        let image = event.target.src;
        imageElement.src = image;

        popupWrapper.style.display = 'block';
        pageMask.style.display = 'block';

        document.getElementsByTagName("body")[0].style = 'overflow: hidden';

        imageCounter = imageList.indexOf(image);
    })
})

const leftBtn = document.querySelector('.left-btn');
leftBtn.addEventListener('click', (event) => {
    event.preventDefault();

    imageCounter--;
    if(imageCounter < 0) {
        imageCounter = imageList.length - 1;
    }
    imageElement.src = imageList[imageCounter];
})

const rightBtn = document.querySelector('.right-btn');
rightBtn.addEventListener('click', (event) => {
    event.preventDefault();

    imageCounter++;
    if(imageCounter >= imageList.length) {
        imageCounter = 0;
    }
    imageElement.src = imageList[imageCounter];
})

// alert('leo')