const sections = document.querySelectorAll('.section')
const sectbtns = document.querySelectorAll('.controls')
const sectbtn = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')

function pageTransition() {
    //button clic active class
    for(let i = 0; i < sectbtn.length; i++) {
        sectbtn[i].addEventListener('click' , function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn' , '')
            this.className += 'active-btn'
        })
    }
}

pageTransition()