import React from 'react';
import './App.css';
import './style.css';
import TablaVentas from './components/tabla-ventas';
import TablaSucursal from './components/tabla-sucursal'
import TablaEstadisticas from './components/tabla-estadisticas'

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
  borrarVenta(id){
    let ventas = this.state.ventas.filter(venta => venta.id !== id);
    this.setState({ventas: ventas})
}

  render () {
    
  return ( <div>{JSON.stringify(this.state.ventas)}
 
  <TablaVentas ventas={this.state.ventas} precios={this.state.precios} borrarVenta={this.borrarVenta}/>
 
 <TablaSucursal ventas={this.state.ventas} precios={this.state.precios} sucursales={this.state.sucursales}/>

  <TablaEstadisticas ventas={this.state.ventas} precios={this.state.precios} vendedoras={this.state.vendedoras} />
  
  <div className="modal" id="modal-nueva-venta">
    <div className="modal-backdrop"></div>
    <div className="modal-container">
      <div className="modal-header">
        Nueva venta
      </div>
      <div className="modal-body">
       
        <form action="">
          <div className="form-group">
            <h4 className="modal-title">Agregar Venta</h4>
           <label for="">Vendedora</label>
            <select id="vendedora" className="form-control">
        </select>
        <div className="form-group">
            <label>Componentes</label>
          <select multiple="" id="componentes" className="form-control">
          </select>
          </div>
          <div className="form-group">
              <label>Sucursal</label>
            <select id="sucursal" className="form-control">
              
            </select>
          </div>
      </div>
    </form>
     
      </div>
      <div className="modal-footer">
        <button className="btn-modal-close">Cancel</button>
        <button className="btn-modal-agregar">Add</button>
      </div>
    </div>
  </div>
  
  </div>
  ) 
 }
}



export default App;