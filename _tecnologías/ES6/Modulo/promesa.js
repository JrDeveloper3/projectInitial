function hacerAlgoPromesa() {
    return new Promise(function(resolve, reject) {
        setTimeout(
            () => {
                console.log('hacer algo que ha ocupado un tiempo...');
                let number = Math.random()

                if (number < 0.7) {
                    resolve(number)
                } else {
                    reject(number)
                }
            }, 2000)
    })
}


hacerAlgoPromesa()
    .then((data) => { console.log("Resultado: ", data) })
    .catch((error) => { console.log('Error: ', error) })