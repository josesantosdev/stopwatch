let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')
let mSegundos = document.getElementById('mSegundos')
let start = document.getElementById('start')
let reset = document.getElementById('reset')
let mim = 0
let seg = 0
let mseg = 0
let intervalo

function doZero() {
    minutos.innerHTML = mim + "m "
    segundos.innerHTML = seg + "s "
    mSegundos.innerHTML = mseg
}

function buttonChange(valor) {
    if (!intervalo) {
        start.innerHTML = " STOP "
    } else {
        intervalo = null
        start.innerHTML = "START"

    }
}

function resetClock() {
    mim = 0
    seg = 0
    mseg = 0
}

doZero();

start.addEventListener('click', () => {
    if (!intervalo) {
        buttonChange()
        intervalo = setInterval(() => {
            mseg++;
            if (mseg == 100) {
                mseg = 0;
                seg++;
                if (seg == 60) {
                    seg = 0;
                    mim++;

                }
            }

            doZero()

        }, (10))

    } else {
        clearInterval(intervalo)
        buttonChange()
    }
})

reset.addEventListener('click', () => {
    clearInterval(intervalo)
    resetClock()
    doZero()
    if (intervalo) {
        buttonChange()
    }



})