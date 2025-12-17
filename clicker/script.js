const body = document.querySelector('body')

body.addEventListener('click', (e)=>{
    const circle = document.createElement('div')
    circle.classList.add('circle')

    const color = ['red', 'green', 'hotpink', 'purple', 'yellow']

    circle.style.backgroundColor = color[Math.floor(Math.random()*6)];
    circle.textContent = "HI"
    circle.style.top = `${e.clientY-25}px`
    circle.style.left = `${e.clientX-25}px`

    body.append(circle)

    setTimeout(()=>{
        circle.remove()
    },5000)
})