let sumFlag = false
let subFlag = false
let mulFlag = false
let divFlag = false
let num1 = ''
let num2 = ''
let keyVal = ''
let _show = document.querySelector('#show')

function nums(self) {
    keyVal = self.innerText
    _show.innerHTML += keyVal

}




function op(self) {
    let _op = self.innerText
    if (_show.innerText == '' || _show.innerText == null || _show.innerText == _op) {
        alert('ابتدا یک عدد وارد کنید!')

    } else {


        if (_show.innerText.substr(-1) == '+' || _show.innerText.substr(-1) == '-' || _show.innerText.substr(-1) == '*' || _show.innerText.substr(-1) == '/') {
            alert('نمی توان همزمان دو عملگر وارد نمود!')
        } else {
            if (_op == '+') {
                sumFlag = true
                _show.innerHTML += '+'
                subFlag = false
                mulFlag = false
                divFlag = false

            } else if (_op == '-') {

                subFlag = true
                _show.innerHTML += '-'
                sumFlag = false
                mulFlag = false
                divFlag = false

            } else if (_op == '*') {

                mulFlag = true
                _show.innerHTML += '*'
                sumFlag = false
                subFlag = false
                divFlag = false
            } else if (_op == '/') {

                divFlag = true
                _show.innerHTML += '/'
                sumFlag = false
                subFlag = false
                mulFlag = false
            }
            else {
                sumFlag = false
                subFlag = false
                mulFlag = false
                divFlag = false
            }
        }

    }

}



function eq() {
    let result = _show.innerHTML
    if (result.substr(-1) == '-' || result.substr(-1) == '+' || result.substr(-1) == '*' || result.substr(-1) == '/') {
        alert('آخرین ورودی شما یک عملگر است!')
    } else {
        result = eval(result)
        alert('جواب شما:  ' + result)   
        _show.innerHTML = ''
    }


    
}



document.querySelector('#clear').addEventListener('click', function () {
    _show.innerHTML = ''
})




