package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;

@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Mapa {

	public static final int TIMEOUT = 300;

	/**
	 *
	 * @return Var
	 */
	// Mapa
	public static Var adicionarMarcadoresColeta() throws Exception {
		return new Callable<Var>() {

			private Var query = Var.VAR_NULL;

			public Var call() throws Exception {
				query = cronapi.database.Operations.query(Var.valueOf("app.entity.Coleta"),
						Var.valueOf("select c from Coleta c where c.coletado = false"));
				while (cronapi.database.Operations.hasElement(query).getObjectAsBoolean()) {
					cronapi.util.Operations.callClientFunction(
							Var.valueOf("blockly.js.blockly.Maps.adicionar_marcado_coleta"),
							cronapi.database.Operations.getField(query, Var.valueOf("this[0]")));
					cronapi.database.Operations.next(query);
				} // end while
				return Var.VAR_NULL;
			}
		}.call();
	}

	/**
	 *
	 * @return Var
	 */
	// Descreva esta função...
	public static Var obtemPontosColeta() throws Exception {
		return new Callable<Var>() {

			private Var query = Var.VAR_NULL;

			public Var call() throws Exception {
				return cronapi.database.Operations.query(Var.valueOf("app.entity.Coleta"),
						Var.valueOf("select c from Coleta c where c.coletado = false"));
			}
		}.call();
	}

	/**
	 *
	 * @return Var
	 */
	// Descreva esta função...
	public static Var obtem_limites_motorista() throws Exception {
		return new Callable<Var>() {

			private Var query = Var.VAR_NULL;

			public Var call() throws Exception {
				return cronapi.database.Operations
						.getField(
								cronapi.database.Operations.query(Var.valueOf("app.entity.Motorista"),
										Var.valueOf(
												"select m.roteiro from Motorista m where m.user.login = :userLogin"),
										Var.valueOf("userLogin", cronapi.util.Operations.getCurrentUserName())),
								Var.valueOf("this[0]"));
			}
		}.call();
	}

}
