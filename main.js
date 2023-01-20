const toggle = document.querySelector('.toggle')
const links = document.querySelector('.links')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('active')
})

/*******************************************************************************************************/                                                                                                                                                                     /*https://devxdev.net/mostrar-ocultar-div/*/

const publi = document.querySelector('.publi')

document.querySelector('.hide').addEventListener('click',() => {
    publi.classList.add('publi_hide')
})

/*******************************************************************************************************/