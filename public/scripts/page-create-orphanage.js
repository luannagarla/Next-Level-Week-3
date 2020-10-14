//create map
const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon 
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})


//add campo photos

function addPhotoField(){
    // pegar o container de fotos |#images
    const container = document.querySelector('#images')

    // pegar o container para duplicar |.new-upload
    const fieldContainer = document.querySelectorAll('.new-upload')

    //realizar o clone da última imagem adicionada
    const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)

    //verificar se está vazio, se sim, n adiconar 
    const input = newFieldContainer.children[0]

    if (input.value == ""){
        return 
    }

    //limpar campo 
    newFieldContainer.children[0].value = ''

    //adicionar o clone ao container |#images
    container.appendChild(newFieldContainer)
}

// function deleteField