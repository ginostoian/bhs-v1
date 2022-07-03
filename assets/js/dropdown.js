const dropdownBtn = document.querySelector('.dropdown-item')
const dropdownMenu = document.querySelector('.dropdown-menu')

const dropdownBtnMobile = document.querySelector('.dropdown-item-mobile')
const dropdownMenuMobile = document.querySelector('.dropdown-menu-mobile')

dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dropdownMenu.classList.toggle('dropdown-menu-visible')
})

dropdownBtnMobile.addEventListener('click', (e) => {
    e.preventDefault()
    dropdownMenuMobile.classList.toggle('dropdown-menu-visible-mobile')
})