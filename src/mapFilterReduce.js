let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Sarj Cihazi", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

//map can create a new array
cart.map(product=>{
    console.log(product.productName + " : " 
    + product.unitPrice * product.quantity)
})

//accumulator and index element name
let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity, 0)
console.log(total)

//filter creates a new array as well
//the products that were bought with quantity more than two
let quantityOver2 = cart.filter(product=>product.quantity>2)

console.log(quantityOver2)

function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)

console.log(cart)

let sayi = 10

function sayiArttir(number) {
    number += 1
}

//wont change since it is sent by value
sayiArttir(sayi)

console.log(sayi) //prints 10