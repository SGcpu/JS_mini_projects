let rect = document.getElementById('center')

rect.addEventListener('mousemove', (e)=>{
    /* console.log(rect.getBoundingClientRect())
    console.log(e.clientX) */
    let rectangleloc = rect.getBoundingClientRect()
    let x = e.clientX-rectangleloc.left;
    let y = e.clientY-rectangleloc.right;
    //console.log(x)
    if(x<rectangleloc.width/2){
        let redcolor = gsap.utils.mapRange(0, rectangleloc.width/2, 255, 0, x)
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,
        })
    }else{
        let bluecolor = gsap.utils.mapRange(rectangleloc.width/2, rectangleloc.width,0, 255, x)
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
            ease: Power4,
        })
    }

})

rect.addEventListener('mouseleave', (e)=>{
    gsap.to(rect, {
            backgroundColor: `white`,
            ease: Power4,
        })
})