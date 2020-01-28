import React from 'react';
import helper from '../functions'

class TablaVentas extends React.Component{
    constructor(props){
        super();
        this.state={
            ventas:props.ventas
        }
    }
    borrarVenta(id){
        let ventas = this.state.ventas.filter(venta => venta.id !== id);
        this.setState({ventas: ventas})
    }
    createTable(){
        let ventas= this.state.ventas;
        let table=[];
        for (let i=0; i<ventas.length; i++) {
            let venta=ventas[i]
           table.push( <tr>
            <td>{venta.fecha.getDate()}/{venta.fecha.getMonth() + 1}/{venta.fecha.getFullYear()}</td>
            <td>{ venta.sucursal }</td>
            <td>{ venta.nombreVendedora }</td>
            <td>{ venta.componentes }</td>
            <td>{helper.precioMaquina(venta.componentes, this.props.precios)}</td>
            <td>
                <a href="#deleteEmployeeModal" onClick={() => {this.borrarVenta(venta.id)}}>x
                </a>
            </td>
            </tr>)

            
        }
        return table;
    }
    render () {
        return(
            <div class="container">
      <div class="table-wrapper">
      <div class="table-tittle">
          <div class="row">
            <div class="col-sm-6">
            <h2>Ventas</h2> 
            </div>
          <div class="col-sm-6">
          <button class="btn-agregar-venta">
            <span>Agregar venta</span>
          </button>
             </div>
            </div>
           </div>
          </div>
        <table class="table table-stripped table-hover table-responsive">
        <thead>
          <tr>
              <th>Fecha</th>
              <th>Sucursal</th>
              <th>Vendedora</th>
              <th>Componente</th>
              <th>Precio</th>
              <th></th>
          </tr>
      </thead>
      <tbody id="ventas">
          {this.createTable()}
      </tbody>
    </table>
  </div>
        );
    }
}

export default TablaVentas;