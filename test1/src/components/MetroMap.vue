<template>
  <div id="map" style="height: 600px;"></div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  name: 'MetroMap',
  data() {
    return {
      stopsData: null,
      stopsMap: {}
    };
  },
  async mounted() {
    await this.loadStopsData(); // Chargement des données de métro lors du montage du composant
    this.initMap();             // Initialisation de la carte Leaflet après chargement des données
  },
  methods: {
    async loadStopsData() {
      try {
        const response = await fetch('../../../Master-Camp-Projet/json/stops.json'); // Mettez à jour le chemin vers votre fichier stops.json
        const data = await response.json();
        this.stopsData = data.stops;
        this.stopsData.forEach(stop => {
          this.createStopConstant(stop.stop_name, [stop.lat, stop.lon]);
        });
      } catch (error) {
        console.error('Erreur de chargement du fichier stops.json:', error);
      }
    },
    createStopConstant(name, coordinates) {
      this.stopsMap[name] = coordinates; // Stocke les coordonnées avec le nom comme clé
    },
    initMap() {
      const map = L.map('map').setView([48.8566, 2.3522], 13); // Coordonnées de Paris
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      this.drawMetroLine(map);
      this.readAndDisplayEdgesFromFile(map);
    },
    drawMetroLine(map) {
      const toureiffel = [48.8584, 2.2945];
      const charbonneau = [48.55870994615249, 2.2858456519980943];
      
      const lineCoordinates = [
        toureiffel,
        charbonneau,
        [48.8406, 2.3376],
        [48.8506, 2.3376]
      ];

      const lineCoordinates2 = [
        toureiffel,
        [48.8406, 2.3376]
      ];

      const lineCoordinates3 = [
        toureiffel,
        charbonneau
      ];

      const polyline = L.polyline(lineCoordinates, { color: 'red' }).addTo(map);
      const test = L.polyline(lineCoordinates2, { color: 'blue' }).addTo(map);
      const vert = L.polyline(lineCoordinates3, { color: 'green' }).addTo(map);

      const eiffelTowerMarker = L.marker(toureiffel).addTo(map);
      eiffelTowerMarker.bindPopup("Tour Eiffel");

      map.fitBounds(test.getBounds());
      map.fitBounds(polyline.getBounds());
      map.fitBounds(vert.getBounds());
    },
    getCoordinatesForVertex(vertex) {
      const vertexCoordinates = {
        '1': [48.8584, 2.2945],
        '2': [48.8606, 2.3376]
      };

      return vertexCoordinates[vertex] || null;
    },
    readAndDisplayEdgesFromFile(map) {
      fetch('./path/to/metro.txt') // Mettez à jour le chemin vers votre fichier metro.txt
        .then(response => response.text())
        .then(text => {
          const lines = text.split('\n');
          lines.forEach(line => {
            if (line.startsWith('E')) {
              const parts = line.split(' ');
              const num_sommet1 = parts[1];
              const num_sommet2 = parts[2];
              const coordinates1 = this.getCoordinatesForVertex(num_sommet1);
              const coordinates2 = this.getCoordinatesForVertex(num_sommet2);

              if (coordinates1 && coordinates2) {
                L.polyline([coordinates1, coordinates2], { color: 'red' }).addTo(map);
              }
            }
          });
        })
        .catch(error => console.error('Erreur lors de la lecture du fichier:', error));
    }
  }
};
</script>

<style>
#map {
  height: 600px;
}
</style>
