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

doZero();

start.addEventListener('click', () => {
    if (!intervalo) {
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

            minutos.innerHTML = mim + "m "
            segundos.innerHTML = seg + "s "
            mSegundos.innerHTML = mseg

        }, (10))
    }
})

reset.addEventListener('click', () => {
    clearInterval(intervalo)
    mim = 0
    seg = 0
    mseg = 0
    intervalo = null

    minutos.innerHTML = mim + "m "
    segundos.innerHTML = seg + "s "
    mSegundos.innerHTML = mseg

})