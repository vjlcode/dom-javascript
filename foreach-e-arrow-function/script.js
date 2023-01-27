let imgs = document.querySelectorAll("img");

imgs.forEach(function (item, index, array) {
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

let titulos = document.getElementsByClassName(".titulo")

let titulosArray = Array.from(titulos)

titulosArray.forEach(function(item){
    console.log(item)
})

let arrowFunction = document.querySelectorAll("img")

arrowFunction.forEach((item) => {console.log(item)})

console.log("-----------------------------------")

arrowFunction.forEach(item => {console.log(item)})

console.log("-----------------------------------")

arrowFunction.forEach(item => console.log(item))