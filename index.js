const bill = document.getElementById('input_bill')
const btt = document.querySelectorAll('.tip')
const results = document.querySelectorAll('.number_tip')
const custom = document.querySelector('.input_custom')
const people = document.getElementById('input_number')
const btt_reset = document.querySelector('.btt')
const error_msg = document.querySelector('.error')

let bill_value = 0;
let tip_value = 0;
let people_value = 0;

function validateFloat(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
};

function validadeInt(s) {
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
};

function calculateTip() {
    if(people_value >= 1) {
        let tipAmount = bill_value * tip_value / people_value;
        let total = bill_value * (tip_value + 1) / people_value;
        results[0].innerHTML = '$' + tipAmount.toFixed(2);
        results[1].innerHTML = '$' + total.toFixed(2);
    } else {
        results[0].innerHTML = '$0.00'
        results[1].innerHTML = '$0.00'
    }
}

function handleClick(event) {
    event.preventDefault()
    btt.forEach(btn => {
        btn.classList.remove('checked');

        if(event.target.innerHTML == btn.innerHTML) {
            btn.classList.add('checked');
            tip_value = parseFloat(btn.innerHTML) / 100; //%
        }
    });

    custom.value = '';
    calculateTip();
}

function setBillValue() {
    if(bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.');
    }

    if(!validateFloat(bill.value)) {
        bill.value = bill.value.substring(0, bill.value.length-1);
    }

    bill_value = parseFloat(bill.value);

    calculateTip();

    emptyResetColor();
}

function setCustomValue() {
    if(!validadeInt((custom.value))){
        custom.value = custom.value.substring(0, custom.value.length-1);
    };

    tip_value = parseFloat(custom.value) / 100

    btt.forEach(btt => {
        btt.classList.remove('checked')
    });

    if(custom.value !== '') {
        calculateTip()
    }

    emptyResetColor()
}

function setPeopleValue() {
    if(!validadeInt(people.value)) {
        people.value = people.value.substring(0, people.value.length-1);
    }

    people_value = parseInt(people.value)

    if(people_value <= 0) {
        people.classList.add('error-wrapper')
        error_msg.classList.add('error-v')
        setTimeout(function() {
            people.classList.remove('error-wrapper')
        error_msg.classList.remove('error-v')
        }, 2500);
    }

    calculateTip()

    emptyResetColor()
}

function emptyResetColor() {
    if(bill.value === '' && custom.value === bill.value && custom.value === people.value) {
        btt_reset.classList.remove('active')
    } else {
        btt_reset.classList.add('active')
    }
}

function reset() {
    bill.value = ''
    setBillValue()

    custom.value = '';
    setCustomValue();

    people.value = '';
    setPeopleValue();

    results[0].innerHTML = '$0.00';
    results[1].innerHTML = '$0.00';
}

bill.addEventListener('input', setBillValue);

btt.forEach(btn => {
    btn.addEventListener('click', handleClick)
});

custom.addEventListener('input', setCustomValue);

people.addEventListener('input', setPeopleValue);

btt_reset.addEventListener('click', reset);