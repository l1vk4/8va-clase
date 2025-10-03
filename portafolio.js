console.log("hola");

const trabajos = [
    {
        nombre: "Bioglow",
        categoria: "Biomaterial Iridiscente",
        imagen: "fotos/bioglow.png"
    },
    {
        nombre: "Brandbook clientmetrica",
        categoria: "Manual de Marca",
        imagen: "fotos/brandbook.png"
    },
    {
        nombre: "Ultika",
        categoria: "Biomaterial Aislante de Energía",
        imagen: "fotos/ultika.jpg"
    },
    {
        nombre: "Afiche tipográfico",
        categoria: "Juego de tipografías Gill Sans y Hey bold",
        imagen: "fotos/afiche.png"
    },
    {
        nombre: "Seacure",
        categoria: "Biomaterial pensado para reemplazar Packaging Secundario",
        imagen: "fotos/shelly.png"
    },
    {
        nombre: "Bifly",
        categoria: "Banco de Tenso Estructura",
        imagen: "fotos/banquito.png"
    }
];

const portafolio = document.getElementById('portafolio');

trabajos.forEach(trabajo => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    
    div.innerHTML = `
        <img src="${trabajo.imagen}" alt="${trabajo.nombre}" width="2606" height="1338">
        <div class="gallery-overlay">
            <h3>${trabajo.nombre}</h3>
            <p>${trabajo.categoria}</p>
        </div>
    `;
    
    portafolio.appendChild(div);
});