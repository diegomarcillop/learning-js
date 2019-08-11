// function
let aprendiendo;
aprendiendo = function(){
     console.log('Aprendiendo JavaScript')
}


aprendiendo = () => {    
     console.log('Aprendiendo')
}
// Retorna Valor
aprendiendo = () => console.log('Aqui');

// Retorna Objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo JavaScript'})

// Pasar 1  parametros
aprendiendo = (year) => {
     return 'Aprendiendo JavaScript en '+year;
}
// Mas corto
aprendiendo = year => 'Aprendiendo JavaScript en '+year;

// 2 parametros
aprendiendo = (tecn1, tecn2) =>`Aprendiendo ${tecn1} y ${tecn2}`;
console.log(aprendiendo('JS','NodeJS'));

const productos = ['Java','C#','Rudy'];

const letrasProductos = productos.map((producto) =>{
     return producto.length;
})

console.log(letrasProductos);

productos.forEach((producto, id) => {
     console.log(` P: ${producto} ID: ${id}`);
})

productos.forEach((producto) => console.log(producto))

