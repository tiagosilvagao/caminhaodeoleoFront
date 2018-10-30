window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Maps = window.blockly.js.blockly.Maps || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Maps.init_map_chat = function() {

	var item, contexto, coordenadasDestino, coordenadasIniciais, desenho, destino, i, item2, itemRota, limites, map, pontoDestino, resposta;
	this.cronapi.cordova.geolocation.getCurrentPosition(function(sender_item) {
		item = sender_item;
		this.cronapi.maps.init('map', 'roadmap', this.cronapi.maps
				.createLatLngPoint(this.cronapi.object.getProperty(item,
						'coords.latitude'), this.cronapi.object.getProperty(
						item, 'coords.longitude')), '18', function(sender_map) {
			map = sender_map;
			this.cronapi.maps.drawingManager("map", 'marker', function(
					sender_desenho) {
				desenho = sender_desenho;
				this.cronapi.screen.changeValueOfField(
						"Motorista.active.roteiro", this.cronapi.maps
								.getRectangleProperties(desenho, 'bounds'));
			}.bind(this), function(sender_desenho) {
				desenho = sender_desenho;
			}.bind(this), function(sender_desenho) {
				desenho = sender_desenho;
				contexto = this.cronapi.screen
						.getScopeVariable('watsonContext');
				resposta = this.cronapi.util.callServerBlockly(
						'blockly.Chat:recebe_mensagem', this.cronapi.maps
								.getMarkerProperties(desenho, 'position'),
						contexto);
				this.blockly.js.blockly.Chat.adicionaRetorno(resposta);
			}.bind(this), function(sender_desenho) {
				desenho = sender_desenho;
			}.bind(this), function(sender_desenho) {
				desenho = sender_desenho;
				this.cronapi.screen.changeValueOfField(
						"Motorista.active.roteiro", this.cronapi.maps
								.getPolygonPaths(desenho));
			}.bind(this));
		}.bind(this));
	}.bind(this), function(sender_item) {
		item = sender_item;
	}.bind(this));
}

/**
 * Maps
 */
window.blockly.js.blockly.Maps.iniciarColeta = function() {

	var item, contexto, coordenadasDestino, coordenadasIniciais, desenho, destino, i, item2, itemRota, limites, map, pontoDestino, resposta;
	this.cronapi.cordova.geolocation.getCurrentPosition(function(sender_item) {
		item = sender_item;
		this.cronapi.maps.init("map", 'roadmap', this.cronapi.maps
				.createLatLngPoint(this.cronapi.object.getProperty(item,
						'coords.latitude'), this.cronapi.object.getProperty(
						item, 'coords.longitude')), '16',
				function(sender_item2) {
					item2 = sender_item2;
					this.blockly.js.blockly.Maps.criarRota(this.cronapi.maps
							.createLatLngPoint(this.cronapi.object.getProperty(
									item, 'coords.latitude'),
									this.cronapi.object.getProperty(item,
											'coords.longitude')));
					this.cronapi.util.scheduleExecution(function() {
						this.cronapi.maps.createMarker("map", 'caminhao', '',
								this.cronapi.maps.createLatLngPoint(
										this.cronapi.object.getProperty(item,
												'coords.latitude'),
										this.cronapi.object.getProperty(item,
												'coords.longitude')),
								'img/truck.png', '', '');
					}.bind(this), 0, 2, 'seconds');
				}.bind(this));
	}.bind(this), function(sender_item) {
		item = sender_item;
	}.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Maps.criarRota = function(coordenadasIniciais) {

	var item, contexto, coordenadasDestino, coordenadasIniciais, desenho, destino, i, item2, itemRota, limites, map, pontoDestino, resposta;
	destino = this.cronapi.util
			.callServerBlockly('blockly.Mapa:obtemPontosColeta');
	limites = this.cronapi.util
			.callServerBlockly('blockly.Mapa:obtem_limites_motorista');
	coordenadasDestino = [];
	for ( var i_index in destino) {
		i = destino[i_index];
		if (this.cronapi.maps.isPointOnBounds(this.cronapi.maps
				.createLatLngPoint(this.cronapi.object.getProperty(i,
						'latitude'), this.cronapi.object.getProperty(i,
						'longitude')), limites)) {
			coordenadasDestino.push(this.cronapi.maps
					.createWayPoint(this.cronapi.maps.createLatLngPoint(
							this.cronapi.object.getProperty(i, 'latitude'),
							this.cronapi.object.getProperty(i, 'longitude'))));
		}
	}
	pontoDestino = coordenadasDestino.pop();
	this.cronapi.maps.directionRoute(this.cronapi.maps.createRequestDirection(
			coordenadasIniciais, pontoDestino, 'DRIVING', coordenadasDestino,
			'true', null), function(sender_itemRota) {
		itemRota = sender_itemRota;
		this.cronapi.maps.drawRoute("map", itemRota, null,
				function(sender_item) {
					item = sender_item;
				}.bind(this));
	}.bind(this));
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Maps.desenhar_caminhoes = function() {

	var item, contexto, coordenadasDestino, coordenadasIniciais, desenho, destino, i, item2, itemRota, limites, map, pontoDestino, resposta;
}
