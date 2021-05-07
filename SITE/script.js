let add = document.getElementById('txt')
let lista = document.getElementById('seltab')
let res = document.getElementById('res')
let num = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true

    } else {
        return false
    }
}
function limpar() {
lista.innerHTML=''
res.innerHTML=''
let num = []
}


function adicionar() {
    

    if (isNumero(add.value) && !inLista(add.value, num)) {
        var item = document.createElement('option')
        
        item.innerHTML = `You added ${add.value}`
        lista.appendChild(item)
        num.push(Number(add.value))
        
        

    } else if (add.value >= 100 || add.value <= 0) {
        alert('[ERROR] ONLY NUMBERS FROM 0 TO 100')

    }else{
        alert('Number already found in the list')
    }
   
    add.value = ''
    add.focus()
    res.innerHTML = ''

}

function finalizar(){
    if(num.length == 0){
        alert(' Please fill in the list')
    }else{
        let total = num.length
        let ordem = num.sort()
        let maior = num[0]
        let menor = num[0]
        var soma = 0
        let media = 0
        

        for(let pos in num){
            soma += num[pos]
            media = soma / total
            
            if(num[pos]>maior){
                maior=num[pos]
            }if(num[pos]<menor){
                menor=num[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML +=`<p>In total we have ${total} of numbers</p> 
        <p>In Order we have: ${ordem}</p>
        <p>The highest reported value is: ${maior}</p>
        <p>The lowest value reported is: ${menor}</p>
        <p>The sum total is ${soma}</p>
        <p>The average is ${media.toFixed(2)}</p>`

    }
}

