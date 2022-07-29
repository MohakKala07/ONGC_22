var map = L.map('map').setView([20.5937,78.9629], 4);
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

// Google Map Layer

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    subdomains:['mt0','mt1','mt2','mt3']
 });
 googleStreets.addTo(map);

 // Satelite Layer
googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
   subdomains:['mt0','mt1','mt2','mt3']
 });
googleSat.addTo(map);

var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
 attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',

});
Stamen_Watercolor.addTo(map);

//geojson

var linedata = L.geoJSON(lineJ,{
    style:{
        color: 'black',
    }
}
    ).addTo(map);
var pointdata = L.geoJSON(pointJ).addTo(map);
var polygondata = L.geoJSON(polygonJ,{
    
    style:{
        fillOpacity:0,
        color: 'blue'
    }
}).addTo(map);

//layers
var baseLayers = {
    "Satellite":googleSat,
    "Google Map":googleStreets,
    "Water Color":Stamen_Watercolor,
    "OpenStreetMap": osm,
};

var overlays = {
    "Cities":pointdata,
    "Routes":linedata,
    "States":polygondata
};

L.control.layers(baseLayers, overlays).addTo(map);


//search

L.Control.geocoder().addTo(map);



