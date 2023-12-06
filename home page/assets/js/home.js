let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let systemList = $$('.system-list-item');
let lineActive = $('.line-active');

systemList.forEach((sysList, index) => {
    sysList.addEventListener("click", function() {
        $('.system-list-item.system-active').classList.remove('system-active')

        this.classList.add('system-active')
        lineActive.style.height = this.offsetHeight + 'px';
        lineActive.style.top = this.offsetTop + 'px';
    })
});