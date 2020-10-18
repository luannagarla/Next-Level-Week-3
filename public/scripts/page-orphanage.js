// objeto pra n dar zoom etc
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map("mapid", options).setView([-27.222633, -49.6455874], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create and add marker
const spanLat = document.querySelector('span[data-lat]')
const spanLng = document.querySelector('span[data-lng]')
L.marker([spanLat.dataset.lat, spanLng.dataset.lng], {icon}).addTo(map)
  
// image gallery

function selectImage(event){
 const button = event.currentTarget

 //remover as clases .active
 const buttons = document.querySelectorAll(".images button")
 buttons.forEach(removeActiveClass)

 function removeActiveClass(button){
  button.classList.remove("active")
 }

 // selecionar a imagem clicada
 const image = button.children[0]
 const imageContainer = document.querySelector(".orphanage-details > img")

 //atualizar o container de image
 imageContainer.src = image.src

 //adicionar a classe .active para o botao selecionado
 button.classList.add("active")
}
