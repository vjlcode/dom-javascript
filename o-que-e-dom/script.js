console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

let height = window.innerHeight
console.log(height); // retorna a altura do browser

// window.alert('Isso é um alerta');

let h1Selecionada = document.querySelector('h1')
console.log(h1Selecionada)

let body = document.body
console.log(body)

console.log(h1Selecionada.innerText)

console.log(h1Selecionada.classList)

let idSelecionado = document.getElementById('paragrafo')
console.log(idSelecionado.innerText)

let heightElement = h1Selecionada.offsetHeight
console.log(heightElement)

function callback(){
    console.log('Clicou...')
}

addEventListener('click', callback)