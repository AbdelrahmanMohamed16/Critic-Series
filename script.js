let body = document.body;
let dropdown = document.querySelector('#drop');
let dropdownMenu = document.querySelector('#drop-menu');
console.log(body);
console.log(dropdown);  
document.querySelector('#drop').addEventListener('click', function() {
    if (dropdown.classList.contains('show')) {
        console.log('show');
        body.style.overflow = 'hidden';
    }
    else {
        console.log('hide');
        body.style.overflow = 'auto';
    }
});
document.querySelector('#drop-menu').addEventListener('click', function() {
    console.log('hide');
    body.style.overflow = 'auto';
});

