// elemento class menu
let menu = document.querySelector('.menu')

// adicionando uma nova classe na tag menu
let add = menu.classList.add('ativo', 'mobile')
// removendo uma classe da tag menu
let remove = menu.classList.remove('ativo')
// adiciona/remove a classe
let toggle = menu.classList.toggle('inativo')
// true or false
let contains = menu.classList.contains('item')
// subtitui uma classe pela outra
let replace = menu.classList.replace('inativo', 'ativo')

let attributes = menu.attributes
console.log(attributes)

let img = document.querySelector('img')

let attributeSrc = img.getAttribute('src')
let attributeAlt = img.setAttribute('alt', 'Luffy do chapel de palha')
let removeAlt = img.removeAttribute('alt')

// string da classe
let stringClass = menu.className
// console.log(stringClass)

let alterationString = menu.className = 'azul'
let acrescString = menu.className += ' vermelho'