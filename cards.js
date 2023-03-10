//CARDS DINAMICAS---------------------
const array = [
    { 
    Titulo:"titulo1",
    Descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, unde! Veritatis accusamus exercitationem quos. Vitae, perspiciatis libero? Eius, sit? Voluptates itaque illo nemo nam quaerat sunt tempora totam, non esse! Facere neque tenetur saepe? Veritatis error saepe ea officia voluptatibus sit sapiente deleniti dolore sunt iusto ducimus laudantium, odit placeat mollitia quia nesciunt ipsum maxime alias non officiis harum. Facere!",
    Img: "./img/img1.png",
    },
    {
    Titulo:"titulo2",
    Descripcion: "Perferendis officiis provident aperiam dolorem beatae assumenda ducimus ullam ex. Ipsum hic molestiae ipsam dicta suscipit obcaecati. Eaque quas natus at dolores. Sit ipsum blanditiis voluptates tenetur, aspernatur sunt molestiae! Fugiat, corporis fuga aliquam nisi quasi a vero impedit ducimus. Impedit eos voluptatem maiores mollitia. Expedita, maiores quos? Nihil accusamus porro minima eligendi, repudiandae labore. Dolorum omnis culpa commodi fugit.",
    Img: "./img/img2.png",
    },
    {
    Titulo:"titulo3",
    Descripcion: "Reprehenderit sed, aspernatur voluptate, sint quasi dignissimos dicta aperiam officiis, unde nihil autem deleniti ea eligendi soluta tenetur. Voluptas iusto nulla mollitia quasi inventore cupiditate quisquam molestias laboriosam labore nesciunt! Vel rerum eos hic temporibus reprehenderit officiis deserunt sapiente asperiores soluta, eum esse vitae adipisci, ullam doloremque magni aliquid est quod a. Hic ad ea totam nisi culpa aut eum!",
    Img: "./img/img3.png",
    },
    {
        Titulo:"titulo4",
        Descripcion: "Reprehenderit sed, aspernatur voluptate, sint quasi dignissimos dicta aperiam officiis, unde nihil autem deleniti ea eligendi soluta tenetur. Voluptas iusto nulla mollitia quasi inventore cupiditate quisquam molestias laboriosam labore nesciunt! Vel rerum eos hic temporibus reprehenderit officiis deserunt sapiente asperiores soluta, eum esse vitae adipisci, ullam doloremque magni aliquid est quod a. Hic ad ea totam nisi culpa aut eum!",
        Img: "./img/img4.png",
        },
];



let carta = document.querySelector("#cardTemplate")
array.map((item) => {
        carta.innerHTML +=`<div class="col"><div class="card"><img src='${item.Img}' class="card-img-top" alt="${item.Img}"><div class="card-body"><h5 class="card-title">${item.Titulo}</h5><p class="card-text">${item.Descripcion}</p></div></div>`
        }
);