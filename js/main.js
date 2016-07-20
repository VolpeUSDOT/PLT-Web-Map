

// Global variables

var map; // Holds map object
var layerList[]; // Object that holds layers for reference

function initialize(){
	
	map = L.map('map').setView([40, -100], 4);
	
	L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Esri, HERE, DeLorme, MapmyIndia, © OpenStreetMap contributors, and the GIS user community',
		maxZoom: 13
	})
	.addTo(map);
	
	layerlist.states = 	L.geoJson('https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', 
		{
		attribution: 'Esri, HERE, DeLorme, MapmyIndia, © OpenStreetMap contributors, and the GIS user community',
		maxZoom: 13
	});
	
}