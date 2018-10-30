window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Coleta = window.blockly.js.blockly.Coleta || {};

/**
 * Coleta
 */
window.blockly.js.blockly.Coleta.desenha_coleta = function() {

	var item, locais, i;
	this.cronapi.cordova.geolocation.getCurrentPosition(function(sender_item) {
		item = sender_item;
		this.cronapi.maps.init("map", 'roadmap', this.cronapi.maps
				.createLatLngPoint(this.cronapi.object.getProperty(item,
						'coords.latitude'), this.cronapi.object.getProperty(
						item, 'coords.longitude')), '10',
				function(sender_item2) {
					item2 = sender_item2;
					this.blockly.js.blockly.Coleta.marcadores_coleta();
				}.bind(this));
	}.bind(this), function(sender_item) {
		item = sender_item;
	}.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Coleta.marcadores_coleta = function() {

	var item, locais, i;
	locais = this.cronapi.util
			.callServerBlockly('blockly.Mapa:obtemPontosColeta');
	for ( var i_index in locais) {
		i = locais[i_index];
		this.cronapi.maps.createMarker("map", this.cronapi.object.getProperty(
				i, 'nome'), this.cronapi.object.getProperty(i, 'nome'),
				this.cronapi.maps.createLatLngPoint(this.cronapi.object
						.getProperty(i, 'latitude'), this.cronapi.object
						.getProperty(i, 'longitude')), '', ['<h3> ',
						this.cronapi.object.getProperty(i, 'nome'),
						'</h3><br/> <h5> Quantidade:',
						this.cronapi.object.getProperty(i, 'quantidade'),
						'</h5>'].join(''), '');
	}
}
