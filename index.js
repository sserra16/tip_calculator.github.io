/* Pegando o valor do input */
const btt_bill = document.querySelector('.invisible')
value_bill = 0

btt_bill.addEventListener('click', function (e) {
    e.preventDefault();
    const bill = document.querySelector('#input_bill')
    value_bill = Number(bill.value)
})

const btt_number = document.querySelector('.invisible2')
value_number = 0

btt_number.addEventListener('click', function(e){
    e.preventDefault()
    const number = document.querySelector('#input_number')
    value_number = Number(number.value)
})

/* Deixando os botões marcados */
const btt = document.querySelectorAll('.btt_perc')

function checked_btt(e) {
    e.onclick = function (e) {
        e.preventDefault()
    }
}

btt.forEach(checked_btt)

/* Fazendo as contas */
let count_perc = 0

btt[0].onclick = function(e){
    e.preventDefault()
    count_perc = (value_bill * 5) / 100
}
btt[1].onclick = function(e){
    e.preventDefault()
    count_perc = (value_bill * 10) / 100
}
btt[2].onclick = function(e){
    e.preventDefault()
    count_perc = (value_bill * 15) / 100
}
btt[3].onclick = function(e){
    e.preventDefault()
    count_perc = (value_bill * 25) / 100
}
btt[4].onclick = function(e){
    e.preventDefault()
    count_perc = value_bill * 50 / 100
}

let count_bill = Number(count_perc) / Number(value_number)




