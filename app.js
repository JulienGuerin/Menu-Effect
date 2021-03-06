const listItems = document.querySelectorAll('li');
const photos = document.querySelectorAll('img');
const menu = document.querySelector('button');
const menuList = document.querySelector('.container');

listItems.forEach((li, i) => {
    li.addEventListener('mouseenter', () => {
        photos[i].classList.add('select');
    })
    li.addEventListener('mouseleave', () => {
        photos[i].classList.remove('select');
    })
    li.addEventListener('mousemove', (e) => {
        itemTop = li.offsetTop;
        photos[i].style.left = - e.clientX * .5 + 'px';
        photos[i].style.top = - e.clientY * .5 + itemTop * .7 + 'px';
    })
})

menu.addEventListener('click', () => {
	// menu.classList.toggle('active');
	menuList.classList.toggle('active');
});