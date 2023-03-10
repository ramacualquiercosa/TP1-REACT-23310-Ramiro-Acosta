//PARRAFOS DINAMICOS------------------

const parrafo = document.querySelector('#parrafo');
const listaDeParrafos = ['Este es un el primer texto de prueba para crear cajas para parrafos dinamicos desde JS.','Este es un el segundo texto de prueba para crear cajas para parrafos dinamicos desde JS.','Este es un el tercer texto de prueba para crear cajas para parrafos dinamicos desde JS.']
const fragment = document.createDocumentFragment()
listaDeParrafos.forEach(item => {
    const texto =document.createElement('p')
    texto.classList.add('container_parrafo')
    texto.textContent= item
    fragment.appendChild(texto)
    
});
parrafo.appendChild(fragment)