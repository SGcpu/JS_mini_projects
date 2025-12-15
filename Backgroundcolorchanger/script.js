const parent = document.getElementsByClassName('parent')[0]


const colors = {
    "Red"         : "#FF0000",
    "Blue"        : "#0000FF",
    "Forest Green": "#228B22",
    "Gold"        : "#FFD700",
    "Misty Rose"  : "#FFE4E1",
    "Random"      : "Random"
};

Object.keys(colors).forEach(key=>{
    let colorchanger = document.createElement('button')
    colorchanger.textContent = key;
    colorchanger.id = key
    colorchanger.style.background = colors[key];
    colorchanger.style.fontSize = "25px"
    parent.appendChild(colorchanger);
})



parent.addEventListener('click', (e)=>{
    const child = e.target;
    const colorName = e.target.id;
    const colorValue = colors[colorName];


    
    if (colorName === 'Random') {
        // Simple random color generation (Optional: look up hex color generation)
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        parent.style.backgroundColor = randomColor;
    } else{
        parent.style.backgroundColor = colorValue;
    }

})