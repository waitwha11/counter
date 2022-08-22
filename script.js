let buttonDecrease = document.getElementById('btn-decrease')
let buttonReset = document.getElementById('btn-reset')
let buttonIncrease = document.getElementById('btn-increase')
let value = document.getElementById('value')
let i = 0

buttonDecrease.addEventListener('click', () => {
    i--
    value.innerHTML = i
    color(i)
})

buttonIncrease.addEventListener('click', () => {
    i++
    value.innerHTML = i
    color(i)
})

buttonReset.addEventListener('click', () => {
    i=0
    value.innerHTML = i
    color(i)
})


function color (){
    if(i<0){
        value.style.color = 'red'
    }
    else if (i>0){
        value.style.color = 'blue'
    }
    else if (i==0){
        value.style.color = 'black'
    }
}