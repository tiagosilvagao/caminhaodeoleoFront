package app.entity;

import java.io.*;
import javax.persistence.*;
import java.util.*;
import javax.xml.bind.annotation.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonFilter;
import cronapi.rest.security.CronappSecurity;


/**
 * Classe que representa a tabela VEICULO
 * @generated
 */
@Entity
@Table(name = "\"VEICULO\"")
@XmlRootElement
@CronappSecurity
@JsonFilter("app.entity.Veiculo")
public class Veiculo implements Serializable {

  /**
   * UID da classe, necessário na serialização
   * @generated
   */
  private static final long serialVersionUID = 1L;

  /**
   * @generated
   */
  @Id
  @Column(name = "id", nullable = false, insertable=true, updatable=true)
  private java.lang.String id = UUID.randomUUID().toString().toUpperCase();

  /**
  * @generated
  */
  @Column(name = "capacidade", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.Double capacidade;

  /**
  * @generated
  */
  @Column(name = "cap", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.Double capacidade_ocupada;

  /**
  * @generated
  */
  @Column(name = "emColeta", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.Boolean emColeta;

  /**
  * @generated
  */
  @ManyToOne
  @JoinColumn(name="fk_motorista", nullable = true, referencedColumnName = "id", insertable=true, updatable=true)
  
  private Motorista motorista;

  /**
  * @generated
  */
  @Column(name = "placa", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String placa;

  /**
   * Construtor
   * @generated
   */
  public Veiculo(){
  }


  /**
   * Obtém id
   * return id
   * @generated
   */
  
  public java.lang.String getId(){
    return this.id;
  }

  /**
   * Define id
   * @param id id
   * @generated
   */
  public Veiculo setId(java.lang.String id){
    this.id = id;
    return this;
  }

  /**
   * Obtém capacidade
   * return capacidade
   * @generated
   */
  
  public java.lang.Double getCapacidade(){
    return this.capacidade;
  }

  /**
   * Define capacidade
   * @param capacidade capacidade
   * @generated
   */
  public Veiculo setCapacidade(java.lang.Double capacidade){
    this.capacidade = capacidade;
    return this;
  }

  /**
   * Obtém capacidade_ocupada
   * return capacidade_ocupada
   * @generated
   */
  
  public java.lang.Double getCapacidade_ocupada(){
    return this.capacidade_ocupada;
  }

  /**
   * Define capacidade_ocupada
   * @param capacidade_ocupada capacidade_ocupada
   * @generated
   */
  public Veiculo setCapacidade_ocupada(java.lang.Double capacidade_ocupada){
    this.capacidade_ocupada = capacidade_ocupada;
    return this;
  }

  /**
   * Obtém emColeta
   * return emColeta
   * @generated
   */
  
  public java.lang.Boolean getEmColeta(){
    return this.emColeta;
  }

  /**
   * Define emColeta
   * @param emColeta emColeta
   * @generated
   */
  public Veiculo setEmColeta(java.lang.Boolean emColeta){
    this.emColeta = emColeta;
    return this;
  }

  /**
   * Obtém motorista
   * return motorista
   * @generated
   */
  
  public Motorista getMotorista(){
    return this.motorista;
  }

  /**
   * Define motorista
   * @param motorista motorista
   * @generated
   */
  public Veiculo setMotorista(Motorista motorista){
    this.motorista = motorista;
    return this;
  }

  /**
   * Obtém placa
   * return placa
   * @generated
   */
  
  public java.lang.String getPlaca(){
    return this.placa;
  }

  /**
   * Define placa
   * @param placa placa
   * @generated
   */
  public Veiculo setPlaca(java.lang.String placa){
    this.placa = placa;
    return this;
  }

  /**
   * @generated
   */
  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Veiculo object = (Veiculo)obj;
    if (id != null ? !id.equals(object.id) : object.id != null) return false;
    return true;
  }

  /**
   * @generated
   */
  @Override
  public int hashCode() {
    int result = 1;
    result = 31 * result + ((id == null) ? 0 : id.hashCode());
    return result;
  }

}
