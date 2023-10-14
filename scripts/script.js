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

//
const bullsHover = document.querySelectorAll('.bull');
// Arrows
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
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

bullsHover.forEach((bull) => {
    bull.addEventListener("mouseenter", (e) => {
        bull.src="media/wbull.svg";
        bull.addEventListener("mouseleave", (e) => {
            if (bull.className === 'bull current-bull') {
                bull.src="media/wbull.svg";
            } else {
                bull.src="media/gbull.svg";
            }
        });
    });
});