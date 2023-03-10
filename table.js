
//TABLA DINAMICA-------------------------

const elementos = [
    {
    id:"1",
    nombre: "Juan",
    apellido: "Alvarez",
    email: "juan@gmail.com",
    },
    {
    id:"2",
    nombre: "Carla",
    apellido: "Gimenez",
    email: "Carla@gmail.com",
    },
    {
    id:"3",
    nombre: "Martín",
    apellido: "Pérez",
    email: "Martín@gmail.com",
    },
    {
    id:"4",
    nombre: "Maira",
    apellido: "Gonzalez",
    email: "Maira@gmail.com",
    },
    {
    id:"5",
    nombre: "Ivan",
    apellido: "Molina",
    email: "Ivan@gmail.com",
    },
    {
    id:"6",
    nombre: "Nicolas",
    apellido: "Martinez",
    email: "Nico@gmail.com",
    },
    {
    id:"7",
    nombre: "Jesica",
    apellido: "Vazquez",
    email: "Vazquez@gmail.com",
    },
    {
    id:"8",
    nombre: "Claudia",
    apellido: "Acosta",
    email: "Claudia@gmail.com",
    },
];



let tabla = document.querySelector("#tabla")
elementos.map((item) => {
        tabla.innerHTML +=`
              <tr>
                <th scope="row">${item.id}</th>
                <td>${item.nombre}</td>
                <td>${item.apellido}</td>
                <td>${item.email}</td>
              </tr>`
        }
);