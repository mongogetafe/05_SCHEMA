// Data Model Patterns

// Documentos embebidos o modelo denormalizado

// Modelo denormalizado es el óptimo para MongoDB y al que se debe recurrir siempre que se pueda

// Colección productos

// {
//     producto: "Zapatillas FTV",
//     marca: "Nike",
//     distribuidores: [
//         {nombre: "ServiZapas", contacto: "...", ...},
//         {nombre: "Distribuciones Pérez", contacto: "...", ...}
//     ]
// }


// Modelo normalizado

// Modelo a evitar salvo que no sea posible

// Colección productos

// {
//     producto: "Zapatillas FTV",
//     marca: "Nike",
//     distribuidores: [
//         1, 2, ...
//     ]
// }

// Colección distribuidores

//    {_id: 1, nombre: "ServiZapas", contacto: "...", ...},
//    {_id: 2, nombre: "Distribuciones Pérez", contacto: "...", ...}
//    ...


// Patterns

// Model One-to-One

// Con modelo denormalizado
// Con una sola consulta se consiguen todos los datos

// {

//     _id: 3", 
//     nombre: "Jon Doe", 
//     direccion: { 
//         calle: "Gran Vía, 40", 
//         localidad: "Madrid", 
//         cp: “28001”
//     } ...
    
// }

// Model One-to-Many

// // One-to-few
// // Al modelo denormalizado
// // El lado one recibirá normalmente más consultas
// // No serán frecuentes las escrituras en el lado many

// {

//     producto: “Nike FTV”, 
//     marca: “Nike”, 
//     imagenes: [ 
//         { url: “https://dominio/img/nikeftv_1.jpg”, textoAlt: “...”, … }, 
//         { url: “https://dominio/img/nikeftv_2.jpg”, textoAlt: “...”, … } 
//     ], 
//     precio: … …
// }

// // One-to-Many indefinido

// Es que habría que estudiar cada caso, intentar ir al modelo denormalizado pero
// hay que tener en cuenta que si el lado many crece mucho  se podría superar
// el límite de 16 MG por doc.

// // One-to-skillions

// // Con modelo normalizado

// Colección productos

// {

// _id: 5648365846,
// producto: “Nike FTV”, 
// marca: “Nike”, 
// id_opiniones: [ 2424242425, 6768768686, …, n], 
// precio: … …
// }

// Colección opiniones

// {

// _id: 2424242425, id_producto: 5648365846, texto: “Buen producto...”, estrellas: 3, …

// }

// ...

// {

// _id: 6768768686, id_producto: 5648365846, texto: “Buen producto...”, estrellas: 3, …

// }

// Modelo Many-to-Many

// Con modelo denormalizado
// Mayor número de consultas en el lado de mayor de número registros
// redundancia

Colección productos

// {

//     _id: 5648365846, 
//     producto: “Nike FTV”, 
//     marca: “Nike”, 
//     tiendas: [ 
//         { nombre: “Alcorcón Store”, calle: “....}, 
//         { nombre: “Las Rozas Store”, contacto: “....}, redundancia
//     ], 
//     precio: … …
// }

// {

//     _id: 5648365847,
//     producto: “Adidas Tokyo”, 
//     marca: “Adidas”, 
//     tiendas: [ 
//         { nombre: “Las Rozas Store”, contacto: “....} redundancia
//     ], 
//     precio: … …
    
// }

// Con modelo normalizado

// Colección productos.

// {

// _id: 5648365846 
// producto: “Nike FTV”, 
// marca: “Nike”, 
// id_tiendas: [

// ], precio: … …

// }

// {

// _id: 5648365847 producto: “Adidas Tokyo”, marca: “Adidas”, tiendas: [ { nombre: “Las Rozas Store”, calle: “....} ], precio: … …

// }

// Colección tiendas

// {

// _id: 1, nombre: “Alcorcón Store”, id_productos: [5648365846, ... ] calle: “....

// } {

// _id: 2, nombre: “Las Rozas Store”, id_productos: [5648365846, 5648365847, ... ] calle: “....

// },
