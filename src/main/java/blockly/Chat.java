package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;

@CronapiMetaData(type = "blockly")
@CronappSecurity(get = "Public", execute = "Public")
public class Chat {

	public static final int TIMEOUT = 300;

	/**
	 *
	 * @return Var
	 */
	// Chat
	public static Var obter_login() throws Exception {
		return new Callable<Var>() {

			public Var call() throws Exception {
				return Var.VAR_NULL;
			}
		}.call();
	}

	/**
	 *
	 * @param entites
	 * @param intents
	 * @param context
	 */
	// Descreva esta função...
	public static void coleta(Var entites, Var intents, Var context) throws Exception {
		new Callable<Var>() {

			public Var call() throws Exception {
				System.out.println(Var.valueOf("entrou na coleta").getObjectAsString());
				return Var.VAR_NULL;
			}
		}.call();
	}

	/**
	 *
	 * @return Var
	 */
	// Descreva esta função...
	public static Var iniciar_watson() throws Exception {
		return new Callable<Var>() {

			private Var watsonMsg = Var.VAR_NULL;

			public Var call() throws Exception {
				watsonMsg = Var.valueOf(
						cronapi.watson.conversation.ConversationOperations.message(
								Var.valueOf("2018-02-16").getTypedObject(
										java.lang.String.class),
								Var.valueOf("1fb650bf-ab03-4d57-b43e-2e04946c77eb")
										.getTypedObject(java.lang.String.class),
								Var.valueOf("DNg72vRxYh0J").getTypedObject(java.lang.String.class),
								Var.VAR_NULL.getTypedObject(java.lang.String.class),
								Var.VAR_NULL.getTypedObject(java.util.Map.class),
								cronapi.object.Operations
										.newObject(Var.valueOf(
												"com.ibm.watson.developer_cloud.conversation.v1.model.MessageOptions"),
												Var.valueOf("workspaceId",
														Var.valueOf("8657fe50-0fe5-42f8-9210-69608333cbfe")))
										.getTypedObject(
												com.ibm.watson.developer_cloud.conversation.v1.model.MessageOptions.class)));
				return cronapi.map.Operations
						.createObjectMapWith(
								Var.valueOf("text",
										cronapi.object.Operations.getObjectField(watsonMsg,
												Var.valueOf("$.output.text[0]"))),
								Var.valueOf("context",
										cronapi.object.Operations.getObjectField(watsonMsg, Var.valueOf("$.context"))));
			}
		}.call();
	}

	/**
	 *
	 * @param entites
	 * @param intents
	 * @param context
	 * @param msg
	 */
	// Descreva esta função...
	public static void qntOleo(Var entites, Var intents, Var context, Var msg) throws Exception {
		new Callable<Var>() {

			public Var call() throws Exception {
				cronapi.json.Operations.setJsonOrMapField(context, Var.valueOf("qntOleo"), Var.VAR_NULL);
				return Var.VAR_NULL;
			}
		}.call();
	}

	/**
	 *
	 * @param mensagem
	 * @param param_context
	 * @return Var
	 */
	// Descreva esta função...
	public static Var recebe_mensagem(Var mensagem, Var param_context) throws Exception {
		return new Callable<Var>() {

			// param
			private Var context = param_context;
			// end
			private Var watsonMsg = Var.VAR_NULL;
			private Var entities = Var.VAR_NULL;
			private Var intents = Var.VAR_NULL;
			private Var blockly = Var.VAR_NULL;
			private Var isMap = Var.VAR_NULL;

			public Var call() throws Exception {
				watsonMsg = Var.valueOf(
						cronapi.watson.conversation.ConversationOperations.message(
								Var.valueOf("2018-02-16").getTypedObject(
										java.lang.String.class),
								Var.valueOf("1fb650bf-ab03-4d57-b43e-2e04946c77eb")
										.getTypedObject(java.lang.String.class),
								Var.valueOf("DNg72vRxYh0J").getTypedObject(java.lang.String.class),
								Var.VAR_NULL.getTypedObject(java.lang.String.class),
								Var.VAR_NULL.getTypedObject(java.util.Map.class),
								cronapi.object.Operations
										.newObject(
												Var.valueOf(
														"com.ibm.watson.developer_cloud.conversation.v1.model.MessageOptions"),
												Var.valueOf("workspaceId",
														Var.valueOf("8657fe50-0fe5-42f8-9210-69608333cbfe")),
												Var.valueOf("input",
														cronapi.object.Operations.newObject(
																Var.valueOf(
																		"com.ibm.watson.developer_cloud.conversation.v1.model.InputData"),
																Var.valueOf("text", mensagem))),
												Var.valueOf("context", context))
										.getTypedObject(
												com.ibm.watson.developer_cloud.conversation.v1.model.MessageOptions.class)));
				context = cronapi.object.Operations.getObjectField(watsonMsg, Var.valueOf("$.context"));
				entities = cronapi.object.Operations.getObjectField(watsonMsg, Var.valueOf("$.entities"));
				intents = cronapi.object.Operations.getObjectField(watsonMsg, Var.valueOf("$.intents"));
				blockly = cronapi.json.Operations.getJsonOrMapField(context, Var.valueOf("blockly"));
				isMap = Var.VAR_FALSE;
				if (cronapi.logic.Operations.isNullOrEmpty(blockly).negate().getObjectAsBoolean()) {
					if (Var.valueOf(blockly.equals(Var.valueOf("blockly.Coleta"))).getObjectAsBoolean()) {
						{
						}
					} else if (Var.valueOf(blockly.equals(Var.valueOf("blockly.qntOleo"))).getObjectAsBoolean()) {
						cronapi.json.Operations.setJsonOrMapField(context, Var.valueOf("qntOleo"), mensagem);
						isMap = Var.VAR_TRUE;
					} else if (Var.valueOf(blockly.equals(Var.valueOf("blockly.coordenadas"))).getObjectAsBoolean()) {
						cronapi.json.Operations.setJsonOrMapField(context, Var.valueOf("coordenadas"),
								Var.valueOf(Var.valueOf("").toString() + mensagem.toString()));
					} else if (Var.valueOf(blockly.equals(Var.valueOf("blockly.verificaDisponibilidade")))
							.getObjectAsBoolean()) {
						cronapi.json.Operations.setJsonOrMapField(context, Var.valueOf("disponibilidade"),
								Var.VAR_TRUE);
					} else if (Var.valueOf(blockly.equals(Var.valueOf("blockly.obtemContato"))).getObjectAsBoolean()) {
						System.out.println(Var.valueOf("contato").getObjectAsString());
						System.out.println(mensagem.getObjectAsString());
						System.out.println(context.getObjectAsString());
					}
					watsonMsg = Var.valueOf(cronapi.watson.conversation.ConversationOperations.message(
							Var.valueOf("2018-02-16").getTypedObject(java.lang.String.class),
							Var.valueOf("1fb650bf-ab03-4d57-b43e-2e04946c77eb").getTypedObject(java.lang.String.class),
							Var.valueOf("DNg72vRxYh0J").getTypedObject(java.lang.String.class),
							Var.VAR_NULL.getTypedObject(java.lang.String.class),
							Var.VAR_NULL.getTypedObject(java.util.Map.class),
							cronapi.object.Operations.newObject(
									Var.valueOf("com.ibm.watson.developer_cloud.conversation.v1.model.MessageOptions"),
									Var.valueOf("workspaceId", Var.valueOf("8657fe50-0fe5-42f8-9210-69608333cbfe")),
									Var.valueOf("input", cronapi.object.Operations.newObject(
											Var.valueOf(
													"com.ibm.watson.developer_cloud.conversation.v1.model.InputData"),
											Var.valueOf("text",
													Var.valueOf(
															blockly.toString() + Var.valueOf(".Done").toString())))),
									Var.valueOf("context", context)).getTypedObject(
											com.ibm.watson.developer_cloud.conversation.v1.model.MessageOptions.class)));
					System.out.println(watsonMsg.getObjectAsString());
				}
				return cronapi.map.Operations
						.createObjectMapWith(
								Var.valueOf("text",
										cronapi.object.Operations.getObjectField(watsonMsg,
												Var.valueOf("$.output.text"))),
								Var.valueOf("context",
										cronapi.object.Operations.getObjectField(watsonMsg, Var.valueOf("$.context"))),
								Var.valueOf("map", isMap));
			}
		}.call();
	}

}
