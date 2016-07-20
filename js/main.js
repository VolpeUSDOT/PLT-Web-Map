

// Global variables

var map; // Holds map object
var layerList={}; // Object that holds layers for reference

function initialize(){
	
	map = L.map('map').setView([40, -100], 4);
	
	L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
		attribution: 'Esri, HERE, DeLorme, MapmyIndia, © OpenStreetMap contributors, and the GIS user community',
		maxZoom: 13
	})
	.addTo(map);
	
	
	// Add layers to layerList object and assign short name
	
	layerList.states = 	L.geoJson.ajax('https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_States_Generalized/FeatureServer/0/query?where=1%3D1&f=geojson&outSR=4326', 
		{
		style:
		{
			"color": "#ffffff",
			fill: false,
			"weight": 2,
			"opacity": 0.65	
		}
	});
	
	
	
	
	
	// Add default layers to map
	layerList.states.addTo(map);
	
}