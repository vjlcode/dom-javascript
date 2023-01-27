// Seleciona pelo ID
let tituloId = document.getElementById('titulo')
let paragradoId = document.getElementById('paragrafo')

// Retorna null caso não exista
let naoExiste = document.getElementById('teste')

// Seleciona pela classe, retorna uma HTMLCollection
let tituloClass = document.getElementsByClassName('titulo')
let paragradoClass = document.getElementsByClassName('paragrafo')

// Seleciona todas as UL's, retorna uma HTMLCollection
let tagName = document.getElementsByName('tagName')

// Retorna o primeiro elemento
// console.log(tituloClass[0]);

// Busca os seletores

let seletorTitulo = document.querySelector('.seletorTitulo')
let seletorParagrafo = document.querySelector('.seletorParagrafo')

// Busca dentro do Ul apenas

let primeiroUl = document.querySelector('ul')

let navItem = primeiroUl.querySelector('li')

let tagsUl = document.querySelectorAll('ul')

let paragrafos = document.querySelectorAll('.paragrafos')

let gridSectionHTML = document.getElementsByClassName('.grid-section')
let gridSectionNODE = document.querySelectorAll('.grid-section')

let sectionAdd = document.querySelector('.grid-section')

sectionAdd.classList.add('section-add')


gridSectionNODE.forEach(function(gridItem){
    gridItem.classList.add('azul')
    console.log(gridItem)
})

