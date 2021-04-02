const burger = document.querySelector('#burger')
const menu = document.querySelector('#menu')


// whenever we click on the burger icon, if it's currently hidden we are going to remove the hidden class so it shows. If it's not hidden, we are going to add that hidden class so it doesnt show
burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden')
    }
})