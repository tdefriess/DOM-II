// Your code goes here

document.querySelectorAll('a').forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.transition = '1s';
        element.style.backgroundColor = 'papayawhip';
    })
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = 'white';
    })
})

document.querySelectorAll('img').forEach(el => {
    el.addEventListener('click', () => {
        el.style.transform = 'scale(1.2)';
        el.style.transition = '0.3s';
    })
    el.addEventListener('mouseleave', () => {
        el.style.transform= 'scale(1.0)';
    })
})

nav = document.querySelector('header');
window.addEventListener('scroll', () => {
    nav.style.backgroundColor = '#B9D9EB';
})

firstP = document.querySelector('p');
firstP.addEventListener('dblclick', () => {
    firstP.style.backgroundColor = 'yellow';
})
firstP.addEventListener('mouseleave', () => {
    firstP.style.backgroundColor = 'white';
})

secondP = document.querySelector('p:nth-child(2)');
secondP.addEventListener('mousedown', () => {
    secondP.style.color = 'red';
})
secondP.addEventListener('mouseup', () => {
    secondP.style.color = 'black';
})

bodyBackground = document.querySelector('body');
window.addEventListener('resize', () => {
    bodyBackground.style.backgroundColor = 'pink';
})