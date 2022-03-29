const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')
const navItems = [nav1, nav2, nav3, nav4, nav5]

// Control Navigation Animation
function navAnimation(remove, add) {
    navItems.forEach((navItem, i) => {
        navItem.classList.replace(`slide-${remove}-${i+1}`, `slide-${add}-${i+1}`)
    })
}

function toggleNav() {
    // Toggle: Menu Bars Open/Closed 
    menuBars.classList.toggle('change')
    // Show Navigation
    overlay.classList.toggle('overlay-active') 

    if (overlay.classList.contains('overlay-active')) {
        // Animate in - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        navAnimation('out', 'in')
    } else {
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        // Animate out - Nav items 
        navAnimation('in', 'out')
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav)
navItems.forEach(navItem => {
    navItem.addEventListener('click', toggleNav)
})