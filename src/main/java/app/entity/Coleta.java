package app.entity;

import java.io.*;
import javax.persistence.*;
import java.util.*;
import javax.xml.bind.annotation.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonFilter;
import cronapi.rest.security.CronappSecurity;


/**
 * Classe que representa a tabela COLETA
 * @generated
 */
@Entity
@Table(name = "\"COLETA\"")
@XmlRootElement
@CronappSecurity
@JsonFilter("app.entity.Coleta")
public class Coleta implements Serializable {

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
  @Column(name = "nome", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String nome;

  /**
  * @generated
  */
  @Column(name = "quantidade", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String quantidade;

  /**
  * @generated
  */
  @Column(name = "latitude", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String latitude;

  /**
  * @generated
  */
  @Column(name = "longitude", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String longitude;

  /**
  * @generated
  */
  @Column(name = "coletado", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.Boolean coletado;

  /**
  * @generated
  */
  @ManyToOne
  @JoinColumn(name="fk_motorista", nullable = true, referencedColumnName = "id", insertable=true, updatable=true)
  
  private Motorista motorista;

  /**
   * Construtor
   * @generated
   */
  public Coleta(){
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
  public Coleta setId(java.lang.String id){
    this.id = id;
    return this;
  }

  /**
   * Obtém nome
   * return nome
   * @generated
   */
  
  public java.lang.String getNome(){
    return this.nome;
  }

  /**
   * Define nome
   * @param nome nome
   * @generated
   */
  public Coleta setNome(java.lang.String nome){
    this.nome = nome;
    return this;
  }

  /**
   * Obtém quantidade
   * return quantidade
   * @generated
   */
  
  public java.lang.String getQuantidade(){
    return this.quantidade;
  }

  /**
   * Define quantidade
   * @param quantidade quantidade
   * @generated
   */
  public Coleta setQuantidade(java.lang.String quantidade){
    this.quantidade = quantidade;
    return this;
  }

  /**
   * Obtém latitude
   * return latitude
   * @generated
   */
  
  public java.lang.String getLatitude(){
    return this.latitude;
  }

  /**
   * Define latitude
   * @param latitude latitude
   * @generated
   */
  public Coleta setLatitude(java.lang.String latitude){
    this.latitude = latitude;
    return this;
  }

  /**
   * Obtém longitude
   * return longitude
   * @generated
   */
  
  public java.lang.String getLongitude(){
    return this.longitude;
  }

  /**
   * Define longitude
   * @param longitude longitude
   * @generated
   */
  public Coleta setLongitude(java.lang.String longitude){
    this.longitude = longitude;
    return this;
  }

  /**
   * Obtém coletado
   * return coletado
   * @generated
   */
  
  public java.lang.Boolean getColetado(){
    return this.coletado;
  }

  /**
   * Define coletado
   * @param coletado coletado
   * @generated
   */
  public Coleta setColetado(java.lang.Boolean coletado){
    this.coletado = coletado;
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
  public Coleta setMotorista(Motorista motorista){
    this.motorista = motorista;
    return this;
  }

  /**
   * @generated
   */
  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Coleta object = (Coleta)obj;
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
