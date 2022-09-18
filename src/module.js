function sleep (time = 1000) {
    return new Promise(res => {
        setTimeout(() => {
            res()

        }, time)
    })
}

async function start () {
    console.log('start')
    await sleep()
    console.log('end')
}

start()