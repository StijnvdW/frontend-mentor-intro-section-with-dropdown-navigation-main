function closeMobileMenu(params) {
    let mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.display = 'none';
}

function openMobileMenu(params) {
    let mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.display = 'block';
}

function clickMobileDropdownMenu(id) {
    let dropdown = document.getElementById(id);
    let displayValue = dropdown.style.display;
    if (displayValue == 'block') {
        dropdown.style.display = 'none'
    } else {
        dropdown.style.display = 'block';
    }
}