const dropdownBtn = document.querySelector('.dropdown-item')
const dropdownMenu = document.querySelector('.dropdown-menu')

dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dropdownMenu.classList.toggle('dropdown-menu-visible')
})