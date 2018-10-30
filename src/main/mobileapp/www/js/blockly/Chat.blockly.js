window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Chat = window.blockly.js.blockly.Chat || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Chat.iniciar_watson = function() {

	var msg, respostaWatson, resposta, modelo, mensagem, remetente, i;
	msg = this.cronapi.screen.getValueOfField("vars.chatMessages");
	resposta = this.cronapi.util
			.callServerBlockly('blockly.Chat:iniciar_watson');
	this.cronapi.screen.createScopeVariable('watsonContext',
			this.cronapi.object.getProperty(resposta, 'context'));
	respostaWatson = this.blockly.js.blockly.Chat.modelo_mensagem(
			this.cronapi.object.getProperty(resposta, 'text'), 'Biotank');
	msg.push(respostaWatson);
	this.cronapi.screen.changeValueOfField("vars.chatMessages", msg);
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Chat.enviar_mensagem = function() {

	var msg, respostaWatson, resposta, modelo, mensagem, remetente, i;
	modelo = this.blockly.js.blockly.Chat.modelo_mensagem(this.cronapi.screen
			.getValueOfField("vars.message"), this.cronapi.screen
			.getValueOfField('vars.user'));
	msg = this.cronapi.screen.getValueOfField("vars.chatMessages");
	msg.push(modelo);
	this.cronapi.screen.changeValueOfField("vars.chatMessages", msg);
	resposta = this.cronapi.util.callServerBlockly(
			'blockly.Chat:recebe_mensagem', this.cronapi.screen
					.getValueOfField("vars.message"), this.cronapi.screen
					.getScopeVariable('watsonContext'));
	this.blockly.js.blockly.Chat.adicionaRetorno(resposta);
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Chat.modelo_mensagem = function(mensagem, remetente) {

	var msg, respostaWatson, resposta, modelo, mensagem, remetente, i;
	modelo = this.cronapi.object.createObjectFromString('{}');
	this.cronapi.object.setProperty(modelo, 'from', remetente);
	this.cronapi.object.setProperty(modelo, 'text', mensagem);
	return modelo;
}

/**
 * Chat
 */
window.blockly.js.blockly.Chat.iniciar = function() {

	var msg, respostaWatson, resposta, modelo, mensagem, remetente, i;
	this.cronapi.screen.createScopeVariable('user', 'Cliente');
	this.cronapi.screen.changeValueOfField("vars.chatMessages", []);
	this.cronapi.screen.changeValueOfField('vars.pedidos', []);
	this.blockly.js.blockly.Chat.iniciar_watson();
}

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Chat.adicionaRetorno = function(resposta) {

	var msg, respostaWatson, resposta, modelo, mensagem, remetente, i;
	this.cronapi.screen.createScopeVariable('watsonContext',
			this.cronapi.object.getProperty(resposta, 'context'));
	if (this.cronapi.logic.typeOf(this.cronapi.object.getProperty(resposta,
			'text'), 'string')) {
		modelo = this.blockly.js.blockly.Chat.modelo_mensagem(
				this.cronapi.object.getProperty(resposta, 'text'), 'Biotank');
		msg = this.cronapi.screen.getValueOfField("vars.chatMessages");
		this.cronapi.object.setProperty(modelo, 'map', this.cronapi.object
				.getProperty(resposta, 'map'));
		msg.push(modelo);
		this.cronapi.screen.changeValueOfField("vars.chatMessages", msg);
	} else {
		var i_list = this.cronapi.object.getProperty(resposta, 'text');
		for ( var i_index in i_list) {
			i = i_list[i_index];
			modelo = this.blockly.js.blockly.Chat.modelo_mensagem(i, 'Biotank');
			this.cronapi.object.setProperty(modelo, 'map', this.cronapi.object
					.getProperty(resposta, 'map'));
			msg = this.cronapi.screen.getValueOfField("vars.chatMessages");
			msg.push(modelo);
			this.cronapi.screen.changeValueOfField("vars.chatMessages", msg);
		}
	}
	this.cronapi.screen.changeValueOfField("vars.message", '');
}
