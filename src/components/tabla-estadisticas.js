import React from 'react';
import helper from '../functions'

class TablaEstadisticas extends React.Component{
    constructor(props){
        super();
        this.state={
            ventas:props.ventas
        }
    }

    calcularProductoEstrella(){
        const cantidadVentasComponente=(componenteUnitario)=> { 
            return this.state.ventas
            .map(venta=>venta.componentes)
            .flat()
            .filter(componenteVendido=>componenteVendido===componenteUnitario)
            .length
            
            };
        let dato = this.props.precios[0].componente

        this.props.precios.forEach(function (comp){
            if (cantidadVentasComponente(comp.componente) > cantidadVentasComponente(dato)) {
                dato = comp.componente
            }

        })
        return dato

    }

    calcularVendedoraEstrella(){
        const ventasVendedora=(vendedora)=> {
            let totalVentas = 0
         this.state.ventas.filter(venta => 
        vendedora===venta.nombreVendedora)
        .forEach (venta=> totalVentas+=helper.precioMaquina(venta.componentes, this.props.precios));
        return totalVentas
        
        }
        let ventasPorVendedora=[]
        this.props.vendedoras.forEach(vendedora=>{
            ventasPorVendedora.push({
        vendedora: vendedora,
        ventas: ventasVendedora(vendedora)
        })
         })
        let top = {
                vendedora : "",
                ventas : 0
            }
            ventasPorVendedora.forEach(ventas_ven => {
                if(top.ventas <= ventas_ven.ventas){
            top = ventas_ven
            }
        })
        return top.vendedora;
    }

    render(){
        return (
            <div className="table-wrapper">
            <div className="d-flex flex-column bd-highlight bg-white container">
                <p>Producto estrella: <span id="productoEstrella">{this.calcularProductoEstrella()}</span></p>
                </div>
                <div className="d-flex flex-column bd-highlight bg-white container">
                <p>Vendedora que más ingresos generó: <span id="vendedoraEstrella">{this.calcularVendedoraEstrella()}</span></p>
                </div>
            </div>) 
    }
}
export default TablaEstadisticas;