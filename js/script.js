let num1 = ''
let num2 = ''
let sum = document.querySelector('#sum')
let sub = document.querySelector('#sub')
let mul = document.querySelector('#mul')
let div = document.querySelector('#div')
let _show = document.querySelector('#show')
let _span = _show.children
let sumFlag = false
let subFlag = false
let mulFlag = false
let divFlag = false
// let flag = true

function nums(self) {




    if (sumFlag == false && subFlag == false && mulFlag == false && divFlag == false) {
        num1 += self.innerText
        num1 = parseFloat(num1)
        _span[0].innerHTML = num1

    } else if (sumFlag || subFlag || mulFlag || divFlag) {
        num2 += self.innerText
        num2 = parseFloat(num2)
        _span[2].innerHTML = num2
    }

}


function op(self) {
    self = self.innerText



    if (self == '+') {
        if (_span[0].innerText == '' || _span[0].innerText == null || subFlag == true || mulFlag == true || divFlag == true) {
            alert('مشکلی وجود دارد یا اعداد خالی اند یا همزمان دو اپراتور کلیک شده است!')
        } else {
            if (_span[1].innerText.indexOf('+') > -1) {

                alert('دو تا + زدی')

            } else {
                _span[1].innerHTML = '+'
                sumFlag = true;
            }
        }
    }

    if (self == '-') {
        if (_span[0].innerText == '' || _span[0].innerText == null || sumFlag == true || mulFlag == true || divFlag == true) {
            alert('مشکلی وجود دارد یا اعداد خالی اند یا همزمان دو اپراتور کلکیک شده است!')
        } else {
            if (_span[1].innerText.indexOf('-') > -1) {

                alert('دو تا زدی')


            } else {
                _span[1].innerHTML = '-'
                subFlag = true;
            }
        }
    }
    if (self == '*') {
        if (_span[0].innerText == '' || _span[0].innerText == null || sumFlag == true || subFlag == true || divFlag == true) {
            alert('مشکلی وجود دارد یا اعداد خالی اند یا همزمان دو اپراتور کلکیک شده است!')
        } else {
            if (_span[1].innerText.indexOf('*') > -1) {

                alert('دو تا زدی')


            } else {
                _span[1].innerHTML = '*'
                mulFlag = true;
            }
        }
    }
    if (self == '/') {
        if (_span[0].innerText == '' || _span[0].innerText == null || sumFlag == true || subFlag == true || mulFlag == true) {
            alert('مشکلی وجود دارد یا اعداد خالی اند یا همزمان دو اپراتور کلکیک شده است!')
        } else {
            if (_span[1].innerText.indexOf('/') > -1) {
                console.log(_span[1].innerText);

                alert('دو تا زدی')


            } else {
                _span[1].innerHTML = '/'
                divFlag = true;
            }
        }
    }

}


function eq() {

    if (sumFlag) {
        temp = parseFloat(num1) + parseFloat(num2)


    }
    if (subFlag) {
        temp = parseFloat(num1) - parseFloat(num2)


    }
    if (mulFlag) {
        temp = parseFloat(num1) * parseFloat(num2)


    }
    if (divFlag) {
        temp = parseFloat(num1) / parseFloat(num2)


    }


    alert(temp)

    num1 = ''
    num2 = ''
    _span[0].innerText = ''
    _span[1].innerText = ''
    _span[2].innerText = ''
    sumFlag = false
    subFlag = false
    mulFlag = false
    divFlag = false



}

document.querySelector('#clear').addEventListener('click', function () {
    num1 = ''
    num2 = ''
    _span[0].innerText = ''
    _span[1].innerText = ''
    _span[2].innerText = ''
    sumFlag = false
    subFlag = false
    mulFlag = false
    divFlag = false
})