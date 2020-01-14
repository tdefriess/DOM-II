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

