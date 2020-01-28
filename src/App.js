import React from 'react';
import './App.css';
import './style.css';
import TablaVentas from './components/tabla-ventas';
import TablaSucursal from './components/tabla-sucursal'

class App extends React.Component {
  constructor (props){
    super()
    this.state={
      vendedoras:props.datosLocal.vendedoras,
      ventas:props.datosLocal.ventas,
      precios:props.datosLocal.precios,
      sucursales:props.datosLocal.sucursales
    }
  }

  render () {
    
  return ( <div>{JSON.stringify(this.state)}
 
  <TablaVentas ventas={this.state.ventas} precios={this.state.precios}/>
 
 <TablaSucursal ventas={this.state.ventas} precios={this.state.precios} sucursales={this.state.sucursales}/>

    <div class="table-wrapper">
        <div class="d-flex flex-column bd-highlight bg-white container">
            <p>Producto estrella: <span id="productoEstrella"></span></p>
          </div>
  </div>
  
  <div class="modal" id="modal-nueva-venta">
    <div class="modal-backdrop"></div>
    <div class="modal-container">
      <div class="modal-header">
        Nueva venta
      </div>
      <div class="modal-body">
       
        <form action="">
          <div class="form-group">
            <h4 class="modal-title">Agregar Venta</h4>
           <label for="">Vendedora</label>
            <select id="vendedora" class="form-control">
        </select>
        <div class="form-group">
            <label>Componentes</label>
          <select multiple="" id="componentes" class="form-control">
          </select>
          </div>
          <div class="form-group">
              <label>Sucursal</label>
            <select id="sucursal" class="form-control">
              
            </select>
          </div>
      </div>
    </form>
     
      </div>
      <div class="modal-footer">
        <button class="btn-modal-close">Cancel</button>
        <button class="btn-modal-agregar">Add</button>
      </div>
    </div>
  </div>
  
  </div>
  ) 
 }
}



export default App;