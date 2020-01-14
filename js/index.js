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