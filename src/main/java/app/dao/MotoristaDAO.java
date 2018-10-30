package app.dao;

import app.entity.*;
import java.util.*;
import org.springframework.stereotype.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.*;
import org.springframework.data.repository.query.*;
import org.springframework.transaction.annotation.*; 

/**
 * Realiza operação de Create, Read, Update e Delete no banco de dados.
 * Os métodos de create, edit, delete e outros estão abstraídos no JpaRepository
 * 
 * @see org.springframework.data.jpa.repository.JpaRepository
 * 
 * @generated
 */
@Repository("MotoristaDAO")
@Transactional(transactionManager="app-TransactionManager")
public interface MotoristaDAO extends JpaRepository<Motorista, java.lang.String> {

  /**
   * Obtém a instância de Motorista utilizando os identificadores
   * 
   * @param id
   *          Identificador 
   * @return Instância relacionada com o filtro indicado
   * @generated
   */    
  @Query("SELECT entity FROM Motorista entity WHERE entity.id = :id")
  public Motorista findOne(@Param(value="id") java.lang.String id);

  /**
   * Remove a instância de Motorista utilizando os identificadores
   * 
   * @param id
   *          Identificador 
   * @return Quantidade de modificações efetuadas
   * @generated
   */    
  @Modifying
  @Query("DELETE FROM Motorista entity WHERE entity.id = :id")
  public void delete(@Param(value="id") java.lang.String id);



  /**
   * OneToMany Relation
   * @generated
   */
  @Query("SELECT entity FROM Veiculo entity WHERE entity.motorista.id = :id")
  public Page<Veiculo> findVeiculo(@Param(value="id") java.lang.String id, Pageable pageable);

  /**
   * OneToMany Relation
   * @generated
   */
  @Query("SELECT entity FROM Coleta entity WHERE entity.motorista.id = :id")
  public Page<Coleta> findColeta(@Param(value="id") java.lang.String id, Pageable pageable);

  /**
   * Foreign Key user
   * @generated
   */
  @Query("SELECT entity FROM Motorista entity WHERE entity.user.id = :id")
  public Page<Motorista> findMotoristasByUser(@Param(value="id") java.lang.String id, Pageable pageable);

}
