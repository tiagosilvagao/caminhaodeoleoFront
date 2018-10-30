window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.maps = window.blockly.js.blockly.maps || {};
window.blockly.js.blockly.maps.Maps = window.blockly.js.blockly.maps.Maps || {};

/**
 * Maps
 */
window.blockly.js.blockly.maps.Maps.iniciar = function() {

	var item;
	this.cronapi.maps.init("map", 'roadmap', this.cronapi.maps
			.createLatLngPoint('-23.6376863', '-46.7140094'), '16', function(
			sender_item) {
		item = sender_item;
	}.bind(this));
}
