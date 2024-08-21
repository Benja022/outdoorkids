function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 15,
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(pos);

        const service = new google.maps.places.PlacesService(map);
        const request = {
          location: pos,
          radius: "5000",
          type: ["park"],
        };

        service.nearbySearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
              const place = results[i];
              new google.maps.Marker({
                map: map,
                position: place.geometry.location,
                title: place.name,
              });
            }
          } else {
            console.error("Error al buscar parques:", status);
          }
        });
      },
      () => {
        handleLocationError(true, map.getCenter(), map);
      }
    );
  } else {
    handleLocationError(false, map.getCenter(), map);
  }
}

function handleLocationError(browserHasGeolocation, pos, map) {
  new google.maps.InfoWindow({
    content: browserHasGeolocation
      ? "Error: El servicio de geolocalización ha fallado."
      : "Error: Tu navegador no soporta geolocalización.",
    position: pos,
  }).open(map);
}

function searchPark() {
  const parkName = document.getElementById("park-name").value;

  if (parkName) {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 15,
    });

    const service = new google.maps.places.PlacesService(map);
    const request = {
      query: parkName,
      fields: ["name", "geometry"],
    };

    service.findPlaceFromQuery(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results[0]) {
        const place = results[0];
        map.setCenter(place.geometry.location);
        new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          title: place.name,
        });

        createParkButton(place.name, place.geometry.location);
      } else {
        alert("No se encontraron resultados para la búsqueda.");
      }
    });
  } else {
    alert("Por favor, ingresa el nombre de un parque.");
  }
}

function createParkButton(name, location) {
  const button = document.createElement("button");
  button.textContent = name;
  button.className = "park-item";

  button.onclick = function () {
    const lat = location.lat();
    const lng = location.lng();
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, "_blank");
  };

  const parkList = document.querySelector(".park-list");
  parkList.appendChild(button);
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".park-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const address = button.getAttribute("data-address");
      if (address) {
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            address
          )}`,
          "_blank"
        );
      }
    });
  });
});

window.onload = initMap;
