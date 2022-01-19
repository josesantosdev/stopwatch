const minute = document.getElementById('minute')
const second = document.getElementById('second')
const mSecond = document.getElementById('mSecond')
const start = document.getElementById('start')
const reset = document.getElementById('reset')

let mim = 0
let seg = 0
let ms = 0
let interval
let section = true

function neo() {

    if (section) {

        section = false

    } else {

        section = true

    }
}


function resetClock() {

    if (section) {

        mim = 0
        seg = 0
        ms = 0

        neo()

        if (!section) {

            minute.innerHTML = mim + "m "
            second.innerHTML = seg + "s "
            mSecond.innerHTML = ms

        }

    } else {

        minute.innerHTML = mim + "m "
        second.innerHTML = seg + "s "
        mSecond.innerHTML = ms

    }
}

function buttonChange(valor) {

    if (!interval) {

        start.innerHTML = "STOP"

    } else {

        interval = null
        start.innerHTML = "START"

    }
}



resetClock()



start.addEventListener('click', () => {

    if (!interval) {

        neo()

        buttonChange()

        interval = setInterval(() => {

            ms++;

            if (ms == 100) {

                ms = 0;
                seg++;

                if (seg == 60) {

                    seg = 0;
                    mim++;

                }
            }

            resetClock()

        }, (10))

    } else {

        clearInterval(interval)

        buttonChange()

    }
})

reset.addEventListener('click', () => {

    neo()

    clearInterval(interval)

    resetClock()



    if (interval) {

        buttonChange()

    }



})