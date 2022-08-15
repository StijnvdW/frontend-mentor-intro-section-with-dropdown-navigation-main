function closeMobileMenu(params) {
    let mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.display = 'none';
}

function openMobileMenu(params) {
    let mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.display = 'block';
}

function clickMobileDropdownMenu(className) {
    let dropdown = document.getElementsByClassName('mob-menu-dropdown ' + className)[0];
    let arrowDown = document.getElementsByClassName('mob-nav-item-arrow-down ' + className)[0];
    let arrowUp = document.getElementsByClassName('mob-nav-item-arrow-up ' + className)[0];
    let displayValue = dropdown.style.display;
    if (displayValue == 'block') {
        arrowDown.style.display = 'block';
        arrowUp.style.display = 'none';
        dropdown.style.display = 'none';
    } else {
        arrowDown.style.display = 'none';
        arrowUp.style.display = 'block';
        dropdown.style.display = 'block';
    }
}