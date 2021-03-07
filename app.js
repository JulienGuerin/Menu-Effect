const listItems = document.querySelectorAll('li');
const photos = document.querySelectorAll('img');
const menu = document.querySelector('button');
const menuList = document.querySelector('.container');
const cursor = document.getElementById('cursor');
const burger = document.querySelector('.btn-burger');

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

// menu.addEventListener('click', () => {
// 	// menu.classList.toggle('active');
// 	menuList.classList.toggle('active');
// });

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
    menuList.classList.toggle('active');
});

document.body.addEventListener('mousemove', (e) => {
    const coord = {
        x: e.pageX,
        y: e.pageY
    }

    cursor.style.transform = `translate3D(calc(${coord.x}px - 50%), calc(${coord.y}px - 50%), 0)`;
})