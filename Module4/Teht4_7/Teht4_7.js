// Advanced. Routing with digitransit (16p)
// Not for the faint-hearted. Don't do this if it interferes with the project. It's not worth it.
// Create an app that shows the route from user defined address to school (Karaportti 2).
// You need to have a form where user adds an address. After the form is submitted, the route is displayed on a map.
// Show also the starting and ending time of the trip. Not each part, just the start and end times.
// Example: JS, HTML
// You'll need this Leaflet plugin to make the example work.
// Here is an example on how to use places/addresses with coordinates.
// To get coordinates from address, you can use address search
// If you get cors errors (which is likely not going to happen) use this fix.

'use strict';

const api = "bc97462d739c4bc091f6ab838b93c048";

const map = L.map('map').setView([60.223876, 24.758061], 13);
const form = document.getElementById('form');
const result = document.getElementById('result');

const schoolCoordinates = [60.223876, 24.758061];

let locCoordinates = null;

form.addEventListener('submit', async function (evt) {
  evt.preventDefault();

  const value = document.querySelector('input[name=location]').value;

  try {
    const query = `https://api.digitransit.fi/geocoding/v1/search?text=${value}&size=1`;
    const response = await fetch(query, {
      headers: {
        'digitransit-subscription-key': api
      }
    });
    const jsonData = await response.json();

    const locLat = jsonData.features[0].geometry.coordinates[1];
    const locLong = jsonData.features[0].geometry.coordinates[0];

    locCoordinates = [locLat, locLong];

    L.marker(locCoordinates).addTo(map).bindPopup("Your location").openPopup();

    L.Routing.control({
      waypoints: [
        L.latLng(locCoordinates[0], locCoordinates[1]),
        L.latLng(schoolCoordinates[0], schoolCoordinates[1])
      ]
    }).addTo(map);

  } catch (error) {
    console.log(error.message);
  }

  getRoute(schoolCoordinates, locCoordinates);



});



const apiAddress = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';
const proxy = 'https://users.metropolia.fi/~ilkkamtk/proxy.php?url=';
const url = proxy + encodeURIComponent(apiAddress);

function getRoute(origin, target) {
  // GraphQL query
  const GQLQuery = `{
  plan(
    from: {lat: ${origin.latitude}, lon: ${origin.longitude}}
    to: {lat: ${target.latitude}, lon: ${target.longitude}}
    numItineraries: 1
  ) {
    itineraries {
      legs {
        startTime
        endTime
        mode
        duration
        distance
        legGeometry {
          points
        }
      }
    }
  }
}`;

  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'digitransit-subscription-key': api,
    },
    body: JSON.stringify({ query: GQLQuery }),
  };

  fetch(url, fetchOptions).then(function (response) {
    return response.json();
  }).then(function (result) {
    console.log(result.data.plan.itineraries[0].legs);
    const googleEncodedRoute = result.data.plan.itineraries[0].legs;
    for (let i = 0; i < googleEncodedRoute.length; i++) {
      let color = '';
      switch (googleEncodedRoute[i].mode) {
        case 'WALK':
          color = 'green';
          break;
        case 'BUS':
          color = 'red';
          break;
        case 'RAIL':
          color = 'cyan'
          break;
        case 'TRAM':
          color = 'magenta'
          break;
        default:
          color = 'blue';
          break;
      }
      const route = (googleEncodedRoute[i].legGeometry.points);
      const pointObjects = L.Polyline.fromEncoded(route).getLatLngs(); // fromEncoded: convert Google encoding to Leaflet polylines
      L.polyline(pointObjects).setStyle({
        color
      }).addTo(map);
    }
    map.fitBounds([[origin.latitude, origin.longitude], [target.latitude, target.longitude]]);
  }).catch(function (e) {
    console.error(e.message);
  });


}



L.marker(schoolCoordinates).addTo(map)
  .bindPopup('School')
  .openPopup();


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);