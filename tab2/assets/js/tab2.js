let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

// facilities

let facilitiesList = $$('.facilities-item');
let lineActive = $('.line-active');
let changeNumber = $('.change-numer')

facilitiesList.forEach((facilitiesItem, index) => {
    facilitiesItem.addEventListener("click", function() {
        $('.facilities-item.facilities-active').classList.remove('facilities-active')

        this.classList.add('facilities-active');

        // line active
        lineActive.style.top = this.offsetTop + 'px';
        lineActive.style.height = this.offsetHeight + 'px';

        // change Number
        changeNumber.innerHTML = index + 1;
    })
});

// mission slide

let missionList = $$('.mission-item');
let missionLineActive = $('.mission-line-active');
let missionChangeNumber = $('.mission-change-numer')

missionList.forEach((missionItem, index) => {
    missionItem.addEventListener("click", function() {
        $('.mission-item.mission-active').classList.remove('mission-active')

        this.classList.add('mission-active');

        // mission line active
        missionLineActive.style.top = this.offsetTop + 'px';
        missionLineActive.style.height = this.offsetHeight + 'px';

        // mission change Number
        missionChangeNumber.innerHTML = index + 1;
    })
});

// startup slide

let items = $$('.slide-item');
let prev = $('.prev');
let next = $('.next');
let slider = $('.start-up-slide');

let activeList = 0;
let listLength = items.length - 3;

next.addEventListener("click", function() {
    if (activeList + 1 > listLength) {
        activeList = 0;
    } else {  activeList = activeList + 1 }

    reloadSlider();
});

prev.addEventListener("click", function() {
    if (activeList - 1  < 0) {
        activeList = listLength
    }else { activeList = activeList - 1}

    reloadSlider()
})

function reloadSlider() {
    let checkWidth = items[activeList].offsetLeft;
    slider.style.left = -checkWidth +  "px"
}