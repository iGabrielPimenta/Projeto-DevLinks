
function toggleMode() {
const html = document.documentElement

html.classList.toggle('light') 

const imgProfile = document.querySelector('#profileGabriel img')

if (html.classList.contains('light')) {
    imgProfile.setAttribute('src', './assets/avatar-light.png')
} else {
    imgProfile.setAttribute('src', './assets/avatar.png')
}

}   


