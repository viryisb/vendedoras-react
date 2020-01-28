import React from 'react';
import helper from '../functions'

class TablaSucursal extends React.Component{
    constructor(props){
        super();
        this.state={
            sucursales: props.sucursales,
            ventas: props.ventas
        }
    }
    createTable(){
        let sucursales=this.state.sucursales
        let table=[]

        sucursales.forEach(sucursal => {
            let ventasSucursal = this.state.ventas.filter(venta => venta.sucursal === sucursal);
            let totalSucursal = 0;
            ventasSucursal.forEach(venta=>{
                totalSucursal+=helper.precioMaquina(venta.componentes, this.props.precios)
            })
            table.push(<tr>
                <td>{sucursal}</td>
                <td>{totalSucursal}</td>
               </tr>)
        });
        return table
    }
    render(){
        return(  <div class="d-flex flex-column bd-highlight bg-white container">
        <div>
          <h2>Ventas por sucursal</h2>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sucursal</th>
              
              <th scope="col" id="ventas">Total Ventas</th>
             
            </tr>
          </thead>
    <tbody id="sucursales">{this.createTable()}</tbody>
        </table>
      </div>);
    }
}

export default TablaSucursal;