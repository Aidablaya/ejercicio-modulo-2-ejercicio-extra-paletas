
const ulElement = document.querySelector('.js_palette_list');
const url = 'https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json'

fetch (url)
.then((response)=> response.json())
.then ((data)=>{
    console.log(data)
    ulElement.innerHTML= renderPalette(data.palettes[0]);
});

function renderPalette(palette) {
    let html =
    `<li>
    <h3>${palette.name}</h3>
    <div class="palette">`
    for(const color of palette.colors){
        html +=`<div class="palette__color" style="background-color:#${color}"></div>`
    }
    html += `</li>`;

    return html;

};
'use strict';

console.log('>> Ready :)');

//# sourceMappingURL=main.js.map
