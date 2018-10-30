window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Caminhao = window.blockly.js.blockly.Caminhao || {};

/**
 * Caminhao
 */
window.blockly.js.blockly.Caminhao.desenhaPoligono = function() {

	var item, desenho, coords;
	this.cronapi.cordova.geolocation
			.getCurrentPosition(
					function(sender_coords) {
						coords = sender_coords;
						this.cronapi.maps
								.init(
										"map",
										'roadmap',
										this.cronapi.maps
												.createLatLngPoint(
														this.cronapi.object
																.getProperty(
																		coords,
																		'coords.latitude'),
														this.cronapi.object
																.getProperty(
																		coords,
																		'coords.longitude')),
										'16',
										function(sender_item) {
											item = sender_item;
											this.cronapi.maps
													.drawingManager(
															"map",
															'rectangle',
															function(
																	sender_desenho) {
																desenho = sender_desenho;
																this.cronapi.screen
																		.changeValueOfField(
																				"Motorista.active.roteiro",
																				this.cronapi.maps
																						.getRectangleProperties(
																								desenho,
																								'bounds'));
															}.bind(this),
															function(
																	sender_desenho) {
																desenho = sender_desenho;
															}.bind(this),
															function(
																	sender_item) {
																item = sender_item;
															}.bind(this),
															function(
																	sender_desenho) {
																desenho = sender_desenho;
															}.bind(this),
															function(
																	sender_desenho) {
																desenho = sender_desenho;
																this.cronapi.screen
																		.changeValueOfField(
																				"Motorista.active.roteiro",
																				this.cronapi.maps
																						.getPolygonPaths(desenho));
															}.bind(this));
										}.bind(this));
					}.bind(this), function(sender_item) {
						item = sender_item;
					}.bind(this));
}
