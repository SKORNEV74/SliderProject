const entities = [
    {
        city: `Rostov-on-Don<br> LCD admiral`,
        apartment_area: '81 m2',
        repair_time: '3.5 months',
        img: 'media/sec2foto/foto1.png'
    },
    {
        city: `Sochi<br> Thieves`,
        apartment_area: '105 m2',
        repair_time: '4 months',
        img: 'media/sec2foto/foto2.png'
    },
    {
        city: `Rostov-on-Don<br> Patrionic`,
        apartment_area: '93 m2',
        repair_time: '3 months',
        img: 'media/sec2foto/foto3.png'
    }
]

// Думал сделать красивую анимацию, посредством темноты,
// но на это ушло много времени, а результата нет.
// Так что пока что отложу:)

// const fadeIn = (el) => {
//     el.style.opacity = 0;
//     el.style.transition = 'opacity 10ms';
//     el.style.opacity = 1;
// }
// const fadeOut = (el) => {
//     el.style.opacity = 1;
//     el.style.transition = 'opacity 10ms';
//     el.style.opacity = 0;
//
// }

//
const bullsHover = document.querySelectorAll('.bull');
const places = document.querySelectorAll('.place');
// Arrows
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;
// Dots
const bullLeft = document.querySelector('.bull-left');
const bullCenter = document.querySelector('.bull-center');
const bullRight = document.querySelector('.bull-right');
// 
const city = document.querySelector('.city');
const apartmentArea = document.querySelector('.apartment-area');
const repairTime = document.querySelector('.repair-time');
const image = document.querySelector('.img');
//
const placeLeft = document.querySelector('.place-left');
const placeCenter = document.querySelector('.place-center');
const placeRight = document.querySelector('.place-right');

const setEntity = (index) => {
    city.innerHTML = entities[index].city;
    apartmentArea.innerText = entities[index].apartment_area;
    repairTime.innerText = entities[index].repair_time;
    image.src = entities[index].img;
}

const setFirstEntity = () => {
    currentIndex = 0;
    setEntity(currentIndex);

    cleanStyles();

    bullLeft.classList.add('current-bull');
    bullLeft.src="media/wbull.svg";

    placeLeft.classList.add('current-place');
}
const setSecondEntity = () => {
    currentIndex = 1;
    setEntity(currentIndex);

    cleanStyles();

    bullCenter.classList.add('current-bull');
    bullCenter.src="media/wbull.svg";

    placeCenter.classList.add('current-place');
}
const setThirdEntity = () => {
    currentIndex = 2;
    setEntity(currentIndex);

    cleanStyles();

    bullRight.classList.add('current-bull');
    bullRight.src = "media/wbull.svg";

    placeRight.classList.add('current-place');
}

const cleanStyles = () => {
    bullsHover.forEach((bull) => {
        if (bull.classList.contains(`current-bull`)) {
            bull.classList.remove(`current-bull`);
            bull.src = "media/gbull.svg";
        }
    });
    places.forEach((place) => {
        if (place.classList.contains(`current-place`)) {
            place.classList.remove(`current-place`);
        }
    });
}

bullsHover.forEach((bull) => {
    bull.addEventListener("mouseenter", () => {
        bull.src="media/wbull.svg";
        bull.addEventListener("mouseleave", () => {
            if (bull.classList.contains('current-bull')) {
                bull.src="media/wbull.svg";
            } else {
                bull.src="media/gbull.svg";
            }
        });
    });
});

prev.addEventListener('click', () => {
    if (currentIndex === 0) {
        setEntity(currentIndex + 2);
        currentIndex = 2;
    } else {
        setEntity(currentIndex - 1);
        currentIndex -= 1;
    }
    if (currentIndex === 0) {
        setFirstEntity();
    } else if (currentIndex === 1) {
        setSecondEntity();
    } else if (currentIndex === 2) {
        setThirdEntity();
    }
});
next.addEventListener('click', () => {
    if (currentIndex === 2) {
        setEntity(currentIndex - 2);
        currentIndex = 0;
    } else {
        setEntity(currentIndex + 1);
        currentIndex += 1;
    }
    if (currentIndex === 0) {
        setFirstEntity();
    } else if (currentIndex === 1) {
        setSecondEntity();
    } else if (currentIndex === 2) {
        setThirdEntity();
    }
});

bullLeft.addEventListener('click', setFirstEntity);
bullCenter.addEventListener('click', setSecondEntity);
bullRight.addEventListener('click', setThirdEntity);

placeLeft.addEventListener('click', setFirstEntity);
placeCenter.addEventListener('click', setSecondEntity);
placeRight.addEventListener('click', setThirdEntity);

setInterval(() => {
    if (currentIndex === 2) {
        setEntity(currentIndex - 2);
        currentIndex = 0;
    } else {
        setEntity(currentIndex + 1);
        currentIndex += 1;
    }
    if (currentIndex === 0) {
        setFirstEntity();
    } else if (currentIndex === 1) {
        setSecondEntity();
    } else if (currentIndex === 2) {
        setThirdEntity();
    }
},5000);