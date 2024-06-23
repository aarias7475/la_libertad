var map = L.map('map', {
    center: [-7.943716725225093, -78.38020806043625],
    zoom: 2,
    minZoom: 10,
    maxZoom: 35,
    maxBounds: [[-8.753517629008023, -79.42940239053065], [-7.11596333262085, -77.82539849321354]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleTerrain.addTo(map);


var clinicas = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_la_libertad/wms?", {
	   layers: "webgis_la_libertad:clinicas_ll", //gisweb:clinicas_la_libertad
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
clinicas.addTo(map);

var grifos = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_la_libertad/wms?", {
	   layers: "webgis_la_libertad:grifos_la_libertad", //gisweb:grifos_la_libertad
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
grifos.addTo(map);

var hospital = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_la_libertad/wms?", {
	   layers: "webgis_la_libertad:hospital_ll", //gisweb:hospital_la_libertad
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hospital.addTo(map);

var hotel = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_la_libertad/wms?", {
	   layers: "webgis_la_libertad:hotel_ll", //gisweb:hotel_la_libertad
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
hotel.addTo(map);

var la_libertad = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_la_libertad/wms?", {
	   layers: "webgis_la_libertad:la_libertad", //gisweb:la_libertad_la_libertad
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
la_libertad.addTo(map);

var mercado = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_la_libertad/wms?", {
	   layers: "webgis_la_libertad:mercado_ll", //gisweb:mercado_la_libertad
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
mercado.addTo(map);

var parque = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_la_libertad/wms?", {
	   layers: "webgis_la_libertad:parque_ll", //gisweb:parque_la_libertad
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
parque.addTo(map);

var restaurante = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_la_libertad/wms?", {
	   layers: "webgis_la_libertad:restaurante_ll", //gisweb:restaurante_la_libertad
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
restaurante.addTo(map);

var super_mercado = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_la_libertad/wms?", {
	   layers: "webgis_la_libertad:super_mercado_ll", //gisweb:super_mercado_la_libertad
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
super_mercado.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "SATELLITE": googleSat,
    "TERRAIN": googleTerrain
};

var overlayMaps = {
    "Clinicas": clinicas,
    "Grifos": grifos,
    "Hospital": hospital,
    "Hotel": hotel,
    "Limite departamental": la_libertad,
    "Mercado": mercado,
    "Parque": parque,
    "Restaurante": restaurante,
    "Supermercado": super_mercado
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

L.control.scale({
    imperial: false
  }).addTo(map);
  




