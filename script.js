let boxButton = document.querySelector("#boxButton")
let houseBalloons = document.querySelector("#container")

boxButton.addEventListener("click", e=>{
    placeBalloons()
    console.log("its been pressed")
})

function genRandomColor(){
    var hue =  (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) ;
    console.log(hue)
    return hue;
}
function placeBalloons(){
    let xval = Math.floor((Math.random() * 5) -5)
    let yval = Math.floor((Math.random() * 5))
    let zval = Math.floor((Math.random() * 5) -5)
    houseBalloons.innerHTML += `<a-sphere radius="0.5" scale="1 1 1" position = "${xval} ${yval} ${zval}"></a-sphere>`
    let randomColor = genRandomColor();
    let hue = `rgb(${randomColor})`
    console.log(hue)
    houseBalloons.setAttribute("color",`"rgb(${randomColor})"`)
}