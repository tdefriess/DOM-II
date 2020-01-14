// Your code goes here

document.querySelectorAll('a').forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.transition = '1s';
        element.style.backgroundColor = 'papayawhip';
    })
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = 'white';
    })
    element.addEventListener('click', (event) => {
        event.preventDefault();
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

let nav = document.querySelector('header');
window.addEventListener('scroll', () => {
    nav.style.backgroundColor = '#B9D9EB';
})

let firstP = document.querySelector('p');
firstP.addEventListener('dblclick', () => {
    firstP.style.backgroundColor = 'yellow';
})
firstP.addEventListener('mouseleave', () => {
    firstP.style.backgroundColor = 'white';
})

let secondP = document.querySelector('p:nth-child(2)');
secondP.addEventListener('mousedown', () => {
    secondP.style.color = 'red';
})
secondP.addEventListener('mouseup', () => {
    secondP.style.color = 'black';
})

let pageBody = document.querySelector('body');
window.addEventListener('resize', () => {
    pageBody.style.backgroundColor = 'pink';
})

let thirdP = document.querySelector('.destination p');
thirdP.addEventListener('mousemove', () => {
    thirdP.style.transform = 'scale(1.2)';
    thirdP.style.transition = '0.3s';
})
thirdP.addEventListener('mouseleave', () => {
    thirdP.style.transform = 'scale(1.0)';
})

document.querySelectorAll('.btn').forEach(el => {
    el.addEventListener('mouseout', () => {
        el.style.backgroundColor = 'papayawhip';
    })    
})

let destinationOne = document.querySelector('.destination');
destinationOne.addEventListener('click', (event) => {
    destinationOne.style.backgroundColor = '#b19cd9';
    event.stopPropagation();
})
pageBody.addEventListener('click', (event) => {
    pageBody.style.backgroundColor = 'orange';
})