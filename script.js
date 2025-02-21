const button = document.querySelector('#buton')
const body = document.querySelector('body')


button.addEventListener('click', () => {
    body.style.backgroundColor = getRandomColor()
})

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}