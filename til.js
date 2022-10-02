// header .title mouseover
const header_title = document.querySelector('.title');
header_title.addEventListener('mouseover',() => {
    header_title.style.fontSize = 'unset';
    header_title.style.filter = 'unset';
    header_title.style.cursor = 'none';

});