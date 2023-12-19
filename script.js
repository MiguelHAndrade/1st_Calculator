let calc = []
let res = document.getElementById('txt')


function add(event) {
    let buttonID = event.target.id
    let maxSize = 14

    switch(buttonID) {
        case 'btn0':
            if (calc.length <= maxSize) {
                calc.push('0')
                res.innerHTML += `${calc[calc.length - 1]}`
            }
            break

        case 'btn1':
            if (calc.length <= maxSize) {
                calc.push('1')
                res.innerHTML += `${calc[calc.length - 1]}`
            }
            break
        case 'btn2':
            if (calc.length <= maxSize) {
                calc.push('2')
                res.innerHTML += `${calc[calc.length - 1]}`
            }
            break

        case 'btn3':
            if (calc.length <= maxSize) {
                calc.push('3')
                res.innerHTML += `${calc[calc.length - 1]}`
            }
            break

        case 'btn4':
            if (calc.length <= maxSize) {
                calc.push('4')
                res.innerHTML += `${calc[calc.length - 1]}`
            }
            break

        case 'btn5':
            if (calc.length <= maxSize) {
                calc.push('5')
                res.innerHTML += `${calc[calc.length - 1]}`
            }
            break

        case 'btn6':
            if (calc.length <= maxSize) {
                calc.push('6')
                res.innerHTML += `${calc[calc.length - 1]}`
            }
            break

        case 'btn7':
            if (calc.length <= maxSize) {
                calc.push('7')
                res.innerHTML += `${calc[calc.length - 1]}`
            }
            break

        case 'btn8':
            if (calc.length <= maxSize) {
                calc.push('8')
                res.innerHTML += `${calc[calc.length - 1]}`
            }
            break

        case 'btn9':
            if (calc.length <= maxSize) {
                calc.push('9')
                res.innerHTML += `${calc[calc.length - 1]}`
            }
            break

        case 'btndel':
            if (calc.length > 0 || calc.length >= maxSize) {
                let l = calc.length
                while (l > 0) {
                    calc.pop()
                    l--
                }
                res.innerHTML = ''
            } else {
                res.innerHTML = `0`
            }
            break

        case 'btnplus':
            if (calc.length <= maxSize) {
                calc.push('+')
                res.innerHTML += `${calc[calc.length - 1]}`
            }
            break

        case 'btnmin':
            if (calc.length <= maxSize) {
                calc.push('-')
                res.innerHTML += `${calc[calc.length - 1]}`
            }
            break

        case 'btnres':
            if (calc.length > 0){
                let string = calc.join('')
                let result = eval(string)

                res.innerHTML = result
            } else {
                let l = calc.length
                while (l > 0) {
                    calc.pop()
                    l--
                }
                res.innerHTML = ''
            }

            break

        default:

    }
}

// console.log(total)