const div = document.querySelector(".time")



setInterval(()=>{
    let time = new Date();
div.textContent = time.toLocaleTimeString()
}, 1000)